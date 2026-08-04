import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from './context/useAuth'

export default function Signin() {
  const { signIn } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const submit = async (event) => {
    event.preventDefault()
    try { await signIn(email, password); navigate('/') } catch (err) { setError(err.message) }
  }

  return <main className="page narrow"><h1>Sign in</h1>{error && <p className="message error">{error}</p>}
    <form className="form-card" onSubmit={submit}>
      <label>Email<input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
      <label>Password<input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></label>
      <button type="submit">Sign in</button>
    </form>
    <p>Need an account? <Link to="/signup">Sign up</Link></p>
  </main>
}
