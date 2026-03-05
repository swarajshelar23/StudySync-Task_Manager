
# StudySync React Frontend

>A modern React frontend for the StudySync Student Task & Notes Manager, featuring user, task, and note management with a clean UI and seamless Spring Boot backend integration.

---

## 🚀 Features

- **User Management:** Create, view, and delete users
- **Task Management:** CRUD tasks per user, cycle status (Pending, In Progress, Completed)
- **Note Management:** CRUD notes per user, inline editing
- **Dashboard:** Live summary of users, tasks, and notes
- **Responsive UI:** Clean, modern, and mobile-friendly
- **API Integration:** All data is synced with the backend via REST API

## 🛠️ Tech Stack

- [React 19](https://react.dev/) + [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/) for HTTP requests
- [Vite](https://vitejs.dev/) for fast development and build

## 📦 Prerequisites

- Node.js 18+
- Backend running at `http://localhost:8080` (see [StudySync-Backend](../StudySync-Backend/))

## ⚡ Getting Started

1. **Clone the repo & install dependencies:**
	```bash
	cd studysync-react
	npm install
	```
2. **Start the development server:**
	```bash
	npm run dev
	```
	The app will open at [http://localhost:5173](http://localhost:5173)

> **Note:** All `/api/*` requests are automatically proxied to the backend at `localhost:8080` (see `vite.config.js`).

## 🖥️ Main Pages

| Route      | Description                        |
| ---------- | ---------------------------------- |
| `/`        | Dashboard with summary statistics   |
| `/users`   | Create and manage users            |
| `/tasks`   | Tasks per user (CRUD + status)     |
| `/notes`   | Notes per user (CRUD + edit)       |

## 📁 Folder Structure

```
studysync-react/
├── src/
│   ├── api/           # Axios API service layer
│   ├── components/    # Shared React components (Navbar, etc)
│   ├── pages/         # Page components (Dashboard, Users, Tasks, Notes)
│   ├── App.jsx        # App shell & routing
│   ├── main.jsx       # Entry point
│   └── index.css      # Global styles
├── vite.config.js     # Vite config with API proxy
├── package.json       # Project metadata & scripts
└── ...
```

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the MIT License.
