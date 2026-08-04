import { createContext, useMemo, useState } from 'react'
import { api } from '../lib/api'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [session, setSession] = useState(() => {
    try { return JSON.parse(localStorage.getItem('portfolio-session')) } catch { return null }
  })

  const signIn = async (email, password) => {
    const result = await api('/api/auth/signin', { method: 'POST', body: JSON.stringify({ email, password }) })
    const next = { token: result.token, user: result.user }
    localStorage.setItem('portfolio-session', JSON.stringify(next))
    setSession(next)
    return next
  }

  const signOut = async () => {
    try { await api('/api/auth/signout') } finally {
      localStorage.removeItem('portfolio-session')
      setSession(null)
    }
  }

  const value = useMemo(() => ({ session, signIn, signOut, isAdmin: session?.user?.role === 'admin' }), [session])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { AuthContext }
