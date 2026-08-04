import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { api } from './lib/api'

export default function Signup() {
  const navigate = useNavigate()
  const [values, setValues] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState('')
  const submit = async (event) => {
    event.preventDefault()
    try { await api('/api/users', { method: 'POST', body: JSON.stringify(values) }); navigate('/signin') }
    catch (err) { setError(err.message) }
  }
  return <main className="page narrow"><h1>Create an account</h1>{error && <p className="message error">{error}</p>}
    <form className="form-card" onSubmit={submit}>
      <label>Name<input required value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} /></label>
      <label>Email<input required type="email" value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} /></label>
      <label>Password<input required minLength="6" type="password" value={values.password} onChange={(e) => setValues({ ...values, password: e.target.value })} /></label>
      <button type="submit">Sign up</button>
    </form>
    <p>Already registered? <Link to="/signin">Sign in</Link></p>
  </main>
}
