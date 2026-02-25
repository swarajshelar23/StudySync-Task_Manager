import { useState, useEffect } from 'react'
import {
  getTasksByUser,
  createTask,
  updateTask,
  deleteTask,
  getUsers,
} from '../api/api'
import './Tasks.css'

const STATUS_OPTIONS = ['PENDING', 'IN_PROGRESS', 'COMPLETED']

export default function Tasks() {
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState('')
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // form state
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [deadline, setDeadline] = useState('')
  const [status, setStatus] = useState('PENDING')

  useEffect(() => {
    getUsers()
      .then((res) => {
        setUsers(res.data)
        if (res.data.length > 0) setSelectedUser(res.data[0].id)
      })
      .catch(() => setError('Failed to load users'))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    if (!selectedUser) return
    setLoading(true)
    getTasksByUser(selectedUser)
      .then((res) => setTasks(res.data))
      .catch(() => setError('Failed to load tasks'))
      .finally(() => setLoading(false))
  }, [selectedUser])

  const refresh = () => {
    if (!selectedUser) return
    getTasksByUser(selectedUser).then((res) => setTasks(res.data))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await createTask(selectedUser, { title, description, deadline: deadline || null, status })
      setTitle('')
      setDescription('')
      setDeadline('')
      setStatus('PENDING')
      refresh()
    } catch {
      setError('Failed to create task')
    }
  }

  const cycleStatus = async (task) => {
    const next =
      task.status === 'PENDING'
        ? 'IN_PROGRESS'
        : task.status === 'IN_PROGRESS'
        ? 'COMPLETED'
        : 'PENDING'
    try {
      await updateTask(task.id, { ...task, status: next })
      refresh()
    } catch {
      setError('Failed to update task')
    }
  }

  const handleDelete = async (id) => {
    try {
      await deleteTask(id)
      refresh()
    } catch {
      setError('Failed to delete task')
    }
  }

  const statusClass = (s) =>
    s === 'COMPLETED' ? 'completed' : s === 'IN_PROGRESS' ? 'inprogress' : 'pending'

  if (loading && users.length === 0) return <div className="loading">Loading...</div>

  return (
    <div className="tasks-page">
      <div className="tasks-header">
        <h2>Tasks</h2>
        <select
          className="user-select"
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
        >
          {users.map((u) => (
            <option key={u.id} value={u.id}>
              {u.name}
            </option>
          ))}
        </select>
      </div>

      {error && <div className="error-msg">{error}</div>}

      {!selectedUser ? (
        <p className="empty">Create a user first to add tasks.</p>
      ) : (
        <>
          <form className="task-form" onSubmit={handleSubmit}>
            <input
              placeholder="Task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <input
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              {STATUS_OPTIONS.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <button type="submit">Add Task</button>
          </form>

          <div className="task-list">
            {tasks.length === 0 ? (
              <p className="empty">No tasks yet.</p>
            ) : (
              tasks.map((t) => (
                <div key={t.id} className="task-card">
                  <div className="task-info">
                    <div className="task-title">{t.title}</div>
                    {t.description && <div className="task-desc">{t.description}</div>}
                    {t.deadline && <div className="task-meta">Due: {t.deadline}</div>}
                  </div>
                  <div className="task-actions">
                    <button
                      className={`btn-status ${statusClass(t.status)}`}
                      onClick={() => cycleStatus(t)}
                    >
                      {t.status}
                    </button>
                    <button className="btn-delete" onClick={() => handleDelete(t.id)}>
                      ✕
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </>
      )}
    </div>
  )
}
