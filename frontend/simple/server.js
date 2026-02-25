const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

// simple in-memory tasks
let tasks = [
  { id: 1, title: 'Demo task', description: 'This is a demo task', deadline: null, status: 'PENDING' }
]
let nextId = 2

app.get('/api/tasks', (req, res) => {
  res.json(tasks)
})

app.post('/api/tasks', (req, res) => {
  const { title, description, deadline, status } = req.body
  if (!title) return res.status(400).json({ error: 'title required' })
  const t = { id: nextId++, title, description: description || '', deadline: deadline || null, status: status || 'PENDING' }
  tasks.push(t)
  res.status(201).json(t)
})

app.put('/api/tasks/:id', (req, res) => {
  const id = Number(req.params.id)
  const idx = tasks.findIndex((x) => x.id === id)
  if (idx === -1) return res.status(404).json({ error: 'not found' })
  const { title, description, deadline, status } = req.body
  tasks[idx] = { ...tasks[idx], title: title ?? tasks[idx].title, description: description ?? tasks[idx].description, deadline: deadline ?? tasks[idx].deadline, status: status ?? tasks[idx].status }
  res.json(tasks[idx])
})

app.delete('/api/tasks/:id', (req, res) => {
  const id = Number(req.params.id)
  tasks = tasks.filter((t) => t.id !== id)
  res.status(204).end()
})

// serve static demo UI
app.use('/', express.static(path.join(__dirname, 'public')))

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Simple server running: http://localhost:${port}`))
