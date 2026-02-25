import { useState, useEffect } from 'react'
import { getUsers, getTasks, getNotes } from '../api/api'
import { Link } from 'react-router-dom'
import './Dashboard.css'

export default function Dashboard() {
  const [stats, setStats] = useState({ users: 0, tasks: 0, notes: 0 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([getUsers(), getTasks(), getNotes()])
      .then(([u, t, n]) => {
        setStats({ users: u.data.length, tasks: t.data.length, notes: n.data.length })
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="loading">Loading dashboard...</div>

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p className="subtitle">Overview of your StudySync data</p>

      <div className="stat-grid">
        <Link to="/users" className="stat-card stat-users">
          <div className="stat-number">{stats.users}</div>
          <div className="stat-label">Users</div>
        </Link>
        <Link to="/tasks" className="stat-card stat-tasks">
          <div className="stat-number">{stats.tasks}</div>
          <div className="stat-label">Tasks</div>
        </Link>
        <Link to="/notes" className="stat-card stat-notes">
          <div className="stat-number">{stats.notes}</div>
          <div className="stat-label">Notes</div>
        </Link>
      </div>

      <div className="dashboard-hint">
        <p>
          <strong>Getting started:</strong> Head to the{' '}
          <Link to="/users">Users</Link> page to create a user, then add{' '}
          <Link to="/tasks">Tasks</Link> and <Link to="/notes">Notes</Link>.
        </p>
      </div>
    </div>
  )
}
