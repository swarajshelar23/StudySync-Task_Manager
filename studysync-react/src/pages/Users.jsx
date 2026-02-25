import { useState, useEffect } from 'react'
import { getUsers, createUser, deleteUser } from '../api/api'
import './Users.css'

export default function Users() {
  const [users, setUsers] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  const fetchUsers = async () => {
    try {
      const res = await getUsers()
      setUsers(res.data)
    } catch {
      setError('Failed to load users')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchUsers() }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await createUser({ name, email })
      setName('')
      setEmail('')
      fetchUsers()
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create user')
    }
  }

  const handleDelete = async (id) => {
    try {
      await deleteUser(id)
      fetchUsers()
    } catch {
      setError('Failed to delete user')
    }
  }

  if (loading) return <div className="loading">Loading users...</div>

  return (
    <div className="users-page">
      <h2>Users</h2>

      {error && <div className="error-msg">{error}</div>}

      <form className="user-form" onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Add User</button>
      </form>

      <div className="user-list">
        {users.length === 0 ? (
          <p className="empty">No users yet. Add one above!</p>
        ) : (
          users.map((u) => (
            <div key={u.id} className="user-card">
              <div>
                <div className="user-name">{u.name}</div>
                <div className="user-email">{u.email}</div>
              </div>
              <button className="btn-delete" onClick={() => handleDelete(u.id)}>
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
