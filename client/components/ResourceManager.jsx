import { useEffect, useState } from 'react'
import { api } from '../src/lib/api'
import { useAuth } from '../src/context/useAuth'

const emptyValues = (fields) => Object.fromEntries(fields.map(({ name }) => [name, '']))

export default function ResourceManager({ title, endpoint, fields }) {
  const { session, isAdmin } = useAuth()
  const [items, setItems] = useState([])
  const [values, setValues] = useState(() => emptyValues(fields))
  const [editingId, setEditingId] = useState(null)
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')

  const load = async () => {
    try {
      setError('')
      setItems(await api(endpoint))
    } catch (err) { setError(err.message) }
  }

  useEffect(() => {
    let active = true
    api(endpoint)
      .then((data) => { if (active) setItems(data) })
      .catch((err) => { if (active) setError(err.message) })
    return () => { active = false }
  }, [endpoint])

  const submit = async (event) => {
    event.preventDefault()
    try {
      const path = editingId ? `${endpoint}/${editingId}` : endpoint
      await api(path, { method: editingId ? 'PUT' : 'POST', token: session.token, body: JSON.stringify(values) })
      setStatus(editingId ? 'Entry updated.' : 'Entry created.')
      setValues(emptyValues(fields)); setEditingId(null); await load()
    } catch (err) { setError(err.message) }
  }

  const edit = (item) => {
    setEditingId(item._id)
    setValues(Object.fromEntries(fields.map(({ name, type }) => [name, type === 'date' && item[name] ? item[name].slice(0, 10) : item[name] || ''])))
    setStatus('')
  }

  const remove = async (id) => {
    if (!window.confirm('Delete this entry?')) return
    try { await api(`${endpoint}/${id}`, { method: 'DELETE', token: session.token }); setStatus('Entry deleted.'); await load() }
    catch (err) { setError(err.message) }
  }

  return <main className="page">
    <h1>{title}</h1>
    {error && <p className="message error">{error}</p>}
    {status && <p className="message success">{status}</p>}
    {isAdmin && <form className="form-card" onSubmit={submit}>
      <h2>{editingId ? 'Edit entry' : 'Add entry'}</h2>
      {fields.map(({ name, label, type = 'text' }) => <label key={name}>{label}
        {type === 'textarea'
          ? <textarea required name={name} value={values[name]} onChange={(e) => setValues({ ...values, [name]: e.target.value })} rows="4" />
          : <input required type={type} name={name} value={values[name]} onChange={(e) => setValues({ ...values, [name]: e.target.value })} />}
      </label>)}
      <div className="actions"><button type="submit">{editingId ? 'Save changes' : 'Create'}</button>{editingId && <button type="button" className="secondary" onClick={() => { setEditingId(null); setValues(emptyValues(fields)) }}>Cancel</button>}</div>
    </form>}
    {!isAdmin && <p className="hint">Sign in as an administrator to manage these entries.</p>}
    <section className="cards">
      {items.map((item) => <article className="card" key={item._id}>
        {fields.map(({ name, label, type }) => item[name] && <p key={name}><strong>{label}:</strong> {type === 'date' ? new Date(item[name]).toLocaleDateString() : item[name]}</p>)}
        {isAdmin && <div className="actions"><button type="button" className="secondary" onClick={() => edit(item)}>Edit</button><button type="button" className="danger" onClick={() => remove(item._id)}>Delete</button></div>}
      </article>)}
      {!items.length && <p>No entries yet.</p>}
    </section>
  </main>
}
