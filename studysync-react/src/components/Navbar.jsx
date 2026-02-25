import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>StudySync</h1>
      </div>
      <ul className="navbar-links">
        <li><NavLink to="/" end>Dashboard</NavLink></li>
        <li><NavLink to="/users">Users</NavLink></li>
        <li><NavLink to="/tasks">Tasks</NavLink></li>
        <li><NavLink to="/notes">Notes</NavLink></li>
      </ul>
    </nav>
  )
}
