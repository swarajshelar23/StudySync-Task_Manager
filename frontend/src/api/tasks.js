import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE || 'http://localhost:8080/api/tasks',
  headers: { 'Content-Type': 'application/json' }
})

export async function getTasks() {
  const res = await api.get('/')
  // backend returns tasks with LocalDate; keep as-is
  return res.data
}

export async function getTask(id) {
  const res = await api.get(`/${id}`)
  return res.data
}

export async function createTask(userId, task) {
  const res = await api.post(`/user/${userId}`, task)
  return res.data
}

export async function updateTask(id, task) {
  const res = await api.put(`/${id}`, task)
  return res.data
}

export async function deleteTask(id) {
  const res = await api.delete(`/${id}`)
  return res.data
}
