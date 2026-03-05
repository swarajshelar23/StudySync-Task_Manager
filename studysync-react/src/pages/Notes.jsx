import { useState, useEffect } from 'react'
import {
  getNotesByUser,
  createNote,
  updateNote,
  deleteNote,
  getUsers,
} from '../api/api'
import './Notes.css'

export default function Notes() {
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState('')
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // form
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  // editing
  const [editingId, setEditingId] = useState(null)
  const [editTitle, setEditTitle] = useState('')
  const [editContent, setEditContent] = useState('')

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
    getNotesByUser(selectedUser)
      .then((res) => setNotes(res.data))
      .catch(() => setError('Failed to load notes'))
      .finally(() => setLoading(false))
  }, [selectedUser])

  const refresh = () => {
    if (!selectedUser) return
    getNotesByUser(selectedUser).then((res) => setNotes(res.data))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await createNote(selectedUser, { title, content })
      setTitle('')
      setContent('')
      refresh()
    } catch {
      setError('Failed to create note')
    }
  }

  const startEdit = (note) => {
    setEditingId(note.id)
    setEditTitle(note.title)
    setEditContent(note.content || '')
  }

  const handleUpdate = async (id) => {
    try {
      await updateNote(id, { title: editTitle, content: editContent })
      setEditingId(null)
      refresh()
    } catch {
      setError('Failed to update note')
    }
  }

  const handleDelete = async (id) => {
    try {
      await deleteNote(id)
      refresh()
    } catch {
      setError('Failed to delete note')
    }
  }

  if (loading && users.length === 0) return <div className="loading">Loading...</div>

  return (
    <div className="notes-page">
      <div className="notes-header">
        <h2>Notes</h2>
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
        <p className="empty">Create a user first to add notes.</p>
      ) : (
        <>
          <form className="note-form" onSubmit={handleSubmit}>
            <input
              placeholder="Note title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <textarea
              placeholder="Note content..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={3}
            />
            <button type="submit">Add Note</button>
          </form>

          <div className="note-list">
            {notes.length === 0 ? (
              <p className="empty">No notes yet.</p>
            ) : (
              notes.map((n) => (
                <div key={n.id} className="note-card">
                  {editingId === n.id ? (
                    <div className="note-edit">
                      <input
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                      />
                      <textarea
                        value={editContent}
                        onChange={(e) => setEditContent(e.target.value)}
                        rows={3}
                      />
                      <div className="note-edit-actions">
                        <button className="btn-save" onClick={() => handleUpdate(n.id)}>
                          Save
                        </button>
                        <button className="btn-cancel" onClick={() => setEditingId(null)}>
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="note-body">
                        <div className="note-title">{n.title}</div>
                        {n.content && <div className="note-content">{n.content}</div>}
                      </div>
                      <div className="note-actions">
                        <button className="btn-edit" onClick={() => startEdit(n)}>
                          Edit
                        </button>
                        <button className="btn-delete" onClick={() => handleDelete(n.id)}>
                          ✕
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ))
            )}
          </div>
        </>
      )}
    </div>
  )
}
