# StudySync React Frontend

React-based frontend for the StudySync Student Task & Notes Manager.

## Prerequisites

- Node.js 18+
- Backend running on `http://localhost:8080`

## Setup

```bash
cd studysync-react
npm install
npm run dev
```

Opens on **http://localhost:5173**. API calls are proxied to the Spring Boot backend at port 8080.

## Pages

| Route    | Description                       |
| -------- | --------------------------------- |
| `/`      | Dashboard with summary statistics |
| `/users` | Create and manage users           |
| `/tasks` | Tasks per user (CRUD + status)    |
| `/notes` | Notes per user (CRUD + edit)      |

## Tech Stack

- **React 19** + React Router
- **Axios** for HTTP requests
- **Vite** dev server with API proxy
