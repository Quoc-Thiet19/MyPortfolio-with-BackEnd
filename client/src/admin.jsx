import { useEffect, useState } from 'react'
import { api } from './lib/api'
import { useAuth } from './context/useAuth'

export default function AdminDashboard() {
  const { session, isAdmin } = useAuth()
  const [users, setUsers] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!isAdmin) return

    let active = true
    api('/api/users', { token: session.token })
      .then((data) => {
        if (active) setUsers(data)
      })
      .catch((err) => {
        if (active) setError(err.message)
      })

    return () => { active = false }
  }, [isAdmin, session?.token])

  if (!isAdmin) {
    return <main className="page narrow">
      <h1>Access denied</h1>
      <p className="message error">Administrator access is required.</p>
    </main>
  }

  return <main className="page">
    <div className="dashboard-heading">
      <div>
        <p className="eyebrow">ADMINISTRATION</p>
        <h1>User Management</h1>
      </div>
      <div className="user-count"><strong>{users?.length || 0}</strong><span>Total users</span></div>
    </div>

    <section className="card">
      <h2>Registered users</h2>
      {error && <p className="message error">{error}</p>}
      {users === null && !error ? <p>Loading users...</p> : users?.length ? <div className="table-wrap">
        <table className="user-table">
          <thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Created</th><th>Last updated</th></tr></thead>
          <tbody>{users.map((user) => <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td><span className={`role-badge ${user.role}`}>{user.role}</span></td>
            <td>{user.created ? new Date(user.created).toLocaleDateString() : 'Not available'}</td>
            <td>{user.updated ? new Date(user.updated).toLocaleDateString() : 'Not available'}</td>
          </tr>)}</tbody>
        </table>
      </div> : !error && <p>No registered users found.</p>}
    </section>
  </main>
}
