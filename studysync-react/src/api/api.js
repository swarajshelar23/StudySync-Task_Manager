import axios from 'axios'

const API = axios.create({
  baseURL: '/api',
})

/* ── Users ─────────────────────────────────────────── */
export const getUsers       = ()          => API.get('/users')
export const getUserById    = (id)        => API.get(`/users/${id}`)
export const createUser     = (user)      => API.post('/users', user)
export const updateUser     = (id, user)  => API.put(`/users/${id}`, user)
export const deleteUser     = (id)        => API.delete(`/users/${id}`)

/* ── Tasks ─────────────────────────────────────────── */
export const getTasks           = ()                  => API.get('/tasks')
export const getTaskById        = (id)                => API.get(`/tasks/${id}`)
export const getTasksByUser     = (userId)            => API.get(`/tasks/user/${userId}`)
export const getTasksByStatus   = (userId, status)    => API.get(`/tasks/user/${userId}/status/${status}`)
export const createTask         = (userId, task)      => API.post(`/tasks/user/${userId}`, task)
export const updateTask         = (id, task)          => API.put(`/tasks/${id}`, task)
export const deleteTask         = (id)                => API.delete(`/tasks/${id}`)

/* ── Notes ─────────────────────────────────────────── */
export const getNotes           = ()                  => API.get('/notes')
export const getNoteById        = (id)                => API.get(`/notes/${id}`)
export const getNotesByUser     = (userId)            => API.get(`/notes/user/${userId}`)
export const createNote         = (userId, note)      => API.post(`/notes/user/${userId}`, note)
export const updateNote         = (id, note)          => API.put(`/notes/${id}`, note)
export const deleteNote         = (id)                => API.delete(`/notes/${id}`)
