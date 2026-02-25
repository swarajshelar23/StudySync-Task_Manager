import React from 'react'
import TaskList from './components/TaskList'

export default function App() {
  return (
    <div className="app">
      <header>
        <h1>StudySync - Tasks</h1>
      </header>
      <main>
        <TaskList />
      </main>
    </div>
  )
}
