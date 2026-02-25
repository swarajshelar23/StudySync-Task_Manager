import React, { useEffect, useState } from 'react'
import { getTasks, createTask, updateTask, deleteTask } from '../api/tasks'
import TaskDetail from './TaskDetail'

export default function TaskList() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [editingTask, setEditingTask] = useState(null)
  const [showForm, setShowForm] = useState(false)

  const fetchTasks = async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await getTasks()
      setTasks(data)
    } catch (err) {
      setError(err.message || 'Failed to load tasks')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  const handleCreate = async (taskData) => {
    setLoading(true)
    setError(null)
    try {
      // default userId 1 for demo; replace as needed
      await createTask(1, taskData)
      setShowForm(false)
      fetchTasks()
    } catch (err) {
      setError(err.message || 'Create failed')
    } finally {
      setLoading(false)
    }
  }

  const handleUpdate = async (id, taskData) => {
    setLoading(true)
    setError(null)
    try {
      await updateTask(id, taskData)
      setEditingTask(null)
      fetchTasks()
    } catch (err) {
      setError(err.message || 'Update failed')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this task?')) return
    setLoading(true)
    setError(null)
    try {
      await deleteTask(id)
      fetchTasks()
    } catch (err) {
      setError(err.message || 'Delete failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="task-list">
      <div className="toolbar">
        <button onClick={() => { setShowForm(!showForm); setEditingTask(null) }}>
          {showForm ? 'Close' : 'Add Task'}
        </button>
        <button onClick={fetchTasks}>Refresh</button>
      </div>

      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">Error: {error}</div>}

      {showForm && <TaskDetail onSave={handleCreate} onCancel={() => setShowForm(false)} />}

      <ul>
        {tasks.map((t) => (
          <li key={t.id} className="task-item">
            <div className="task-main">
              <strong>{t.title}</strong>
              <div className="meta">{t.deadline ? t.deadline : ''} — {t.status}</div>
            </div>
            <div className="actions">
              <button onClick={() => { setEditingTask(t); setShowForm(false) }}>Edit</button>
              <button onClick={() => handleDelete(t.id)}>Delete</button>
            </div>
            {editingTask && editingTask.id === t.id && (
              <TaskDetail task={editingTask} onSave={(data) => handleUpdate(t.id, data)} onCancel={() => setEditingTask(null)} />
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
