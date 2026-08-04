import { useEffect, useState } from 'react'
import { api } from './lib/api'
import { useAuth } from './context/useAuth'

const blankContact = { firstName: '', lastName: '', contactNumber: '', email: '', message: '' }

export default function Contact() {
  const { session, isAdmin } = useAuth()
  const [values, setValues] = useState(blankContact)
  const [contacts, setContacts] = useState([])
  const [editingId, setEditingId] = useState(null)
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')

  const loadContacts = async () => {
    if (!isAdmin) return
    try { setContacts(await api('/api/contacts', { token: session.token })) } catch (err) { setError(err.message) }
  }

  useEffect(() => {
    if (!isAdmin) return undefined
    let active = true
    api('/api/contacts', { token: session.token })
      .then((data) => { if (active) setContacts(data) })
      .catch((err) => { if (active) setError(err.message) })
    return () => { active = false }
  }, [isAdmin, session?.token])

  const submit = async (event) => {
    event.preventDefault()
    try {
      const path = editingId ? `/api/contacts/${editingId}` : '/api/contacts'
      await api(path, { method: editingId ? 'PUT' : 'POST', token: session?.token, body: JSON.stringify(values) })
      setStatus(editingId ? 'Message updated.' : 'Thank you. Your message has been sent successfully.')
      setValues(blankContact); setEditingId(null); await loadContacts()
    } catch (err) { setError(err.message) }
  }

  const edit = (contact) => { setEditingId(contact._id); setValues(Object.fromEntries(Object.keys(blankContact).map((key) => [key, contact[key] || '']))); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  const remove = async (id) => {
    if (!window.confirm('Delete this message?')) return
    try { await api(`/api/contacts/${id}`, { method: 'DELETE', token: session.token }); setStatus('Message deleted.'); await loadContacts() } catch (err) { setError(err.message) }
  }

  return <main className="page contact-page">
    <section className="contact-intro">
      <p className="eyebrow">GET IN TOUCH</p>
      <h1>Let's build something great.</h1>
      <p>I'm always open to discussing web development projects, internships, and new opportunities.</p>
      <div className="contact-details">
        <a href="mailto:alex.pham@gmail.com"><span>Email</span>alex.pham@gmail.com</a>
        <a href="tel:+14161234567"><span>Phone</span>+1 416 123 4567</a>
        <a href="https://github.com/Quoc-Thiet19" target="_blank" rel="noreferrer"><span>GitHub</span>github.com/Quoc-Thiet19</a>
      </div>
    </section>

    <section className="contact-form-wrap">
      <h2>{editingId ? 'Edit message' : 'Send a message'}</h2>
      {error && <p className="message error">{error}</p>}
      {status && <p className="message success">{status}</p>}
      <form className="form-card" onSubmit={submit}>
        <div className="form-row">
          <label>First name<input required value={values.firstName} onChange={(e) => setValues({ ...values, firstName: e.target.value })} /></label>
          <label>Last name<input required value={values.lastName} onChange={(e) => setValues({ ...values, lastName: e.target.value })} /></label>
        </div>
        <label>Email<input required type="email" value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} /></label>
        <label>Phone number<input required type="tel" value={values.contactNumber} onChange={(e) => setValues({ ...values, contactNumber: e.target.value })} /></label>
        <label>Message<textarea required rows="5" value={values.message} onChange={(e) => setValues({ ...values, message: e.target.value })} /></label>
        <div className="actions"><button type="submit">{editingId ? 'Save changes' : 'Send message'}</button>{editingId && <button type="button" className="secondary" onClick={() => { setEditingId(null); setValues(blankContact) }}>Cancel</button>}</div>
      </form>
    </section>

    {isAdmin && <section className="admin-messages"><h2>Received messages</h2>{contacts.length ? <div className="cards">{contacts.map((contact) => <article className="card" key={contact._id}><h3>{contact.firstName} {contact.lastName}</h3><p><a href={`mailto:${contact.email}`}>{contact.email}</a> · {contact.contactNumber}</p><p>{contact.message}</p><div className="actions"><button type="button" className="secondary" onClick={() => edit(contact)}>Edit</button><button type="button" className="danger" onClick={() => remove(contact._id)}>Delete</button></div></article>)}</div> : <p>No messages yet.</p>}</section>}
  </main>
}
