# 📋 StudySync — Student Task & Notes Manager

> A full-stack web application where students can register, log in, create personal tasks with deadlines, write notes, and track their academic to-dos.

---

## 🚀 Project Overview

**StudySync** is built as part of **Lab 2 & 3** — covering modern web application development and version control using Git & GitHub.

| Detail | Info |
|---|---|
| **Lab** | Lab 2 (Web App) + Lab 3 (Git & GitHub) |
| **Backend** | Spring Boot (Java) |
| **Frontend** | React + HTML5 / CSS3 |
| **Database** | H2 (dev) / MySQL (prod) |
| **Version Control** | Git & GitHub |

---

## 👥 Team & Contributor Roles

### 🔵 Shlok Bajaj — Backend Lead
**GitHub:** [@ShlokBajaj3433](https://github.com/ShlokBajaj3433)
**Branch:** `feature/backend`

**Responsibilities:**
- Set up the Spring Boot project (Maven/Gradle)
- Designed JPA data models: `User`, `Task`, `Note` entities
- Built all REST API endpoints (CRUD for tasks and notes)
- Configured H2 in-memory database and `application.properties`
- Implemented input validation and global error handling
- Documented all API endpoints (Postman collection / inline docs)
- Initialized the Git repository and made the first commit
- Managed the `main` and `develop` branch structure

**Skills used:** Java, Spring Boot, JPA/Hibernate, REST API design, SQL

---

### 🔵 Swaraj Shelar — Frontend Developer
**GitHub:** [@swarajshelar23](https://github.com/swarajshelar23)
**Branch:** `feature/frontend`

**Responsibilities:**
- Set up the React project using `create-react-app` / Vite
- Built core React components: Task List, Task Detail, Notes Page
- Integrated frontend with backend REST APIs using `fetch` / Axios
- Implemented Add / Edit / Delete task functionality in the UI
- Handled API loading states and error messages in the UI
- Raised Pull Requests from `feature/frontend` → `develop`

**Skills used:** React.js, JavaScript (ES6+), Axios, component state management

---

### 🟢 Zuza Haini — UI / Styling
**GitHub:** [@zuzahaini](https://github.com/zuzahaini)
**Branch:** `feature/ui-styling`

**Responsibilities:**
- Designed the overall UI layout: navbar, sidebar, task cards
- Wrote all CSS / Tailwind styling across the application
- Built the Login and Register page UI (HTML + React)
- Built the Notes section UI component
- Ensured responsive design for mobile and tablet screens
- Maintained consistent color theme 

**Skills used:** HTML5, CSS3, Tailwind CSS, responsive design, UI/UX principles

---

### 🟠 Jay Dhakad — Git Lead / QA / Documentation
**GitHub:** [@jaydhakad8810](https://github.com/jaydhakad8810)
**Branch:** `feature/docs-testing`

**Responsibilities:**
- Created the GitHub repository and added all collaborators
- Set up `.gitignore` and branch protection rules
- Owned the branching strategy (`main` → `develop` → `feature/*`)
- Performed end-to-end manual QA testing of the full application
- Coordinated frontend + backend integration
- Wrote and maintained this `README.md` and project documentation
- Documented all Git commands used (see Lab 3 section below)
- Performed all final Pull Request reviews and merges to `main`

**Skills used:** Git, GitHub, software testing, technical writing, project coordination

---
### 🟠 Vimanyu Sharma — Integration Lead / QA / Documentation
**GitHub:** [@vimanyusharma570](https://github.com/vimanyusharma570-collab)
**Branch:** `feature/docs-testing`

**Responsibilities:**
- Led frontend–backend integration and ensured smooth API connectivity
- Verified all REST APIs using Postman and validated responses
- Performed detailed testing of edge cases and bug tracking
- Assisted in resolving integration issues between React and Spring Boot
- Contributed to improving project structure and folder organization
- Co-authored and refined the README.md and technical documentation
- Supported final deployment readiness and stability checks
- Collaborated in pull request reviews and suggested improvements
**Skills used:** API Testing, Integration Debugging, Git, Postman, Problem Solving, Documentation
## 🗂️ Project Structure

```
StudySync-Task_Manager/
├── backend/                  # Spring Boot application (Shlok)
│   ├── src/
│   │   └── main/
│   │       ├── java/com/studysync/
│   │       │   ├── controller/   # REST Controllers
│   │       │   ├── model/        # JPA Entities (User, Task, Note)
│   │       │   ├── repository/   # Spring Data JPA Repos
│   │       │   └── service/      # Business Logic
│   │       └── resources/
│   │           └── application.properties
│   ├── pom.xml
│   └── README.md             # Backend-specific README
├── frontend/                 # React application (Swaraj + Zuza)
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/            # Page-level components
│   │   └── App.js
│   └── package.json
└── README.md                 # ← You are here
```

---

## ⚙️ Setup & Run

### Prerequisites
- Java 17+
- Node.js 18+
- Git

### Backend (Spring Boot)
```bash
cd backend
./mvnw spring-boot:run
# API runs on http://localhost:8080
```

### Frontend (React)
```bash
cd frontend
npm install
npm start
# App runs on http://localhost:3000
```

---

## 🌿 Branch Strategy (Lab 3)

```
main          ← Production-ready final code (Jay)
└── develop   ← Integration branch
    ├── feature/backend       ← Shlok
    ├── feature/frontend      ← Swaraj
    ├── feature/ui-styling    ← Zuza
    └── feature/docs-testing  ← Jay
```

---

## 🔧 Git Commands Used (Lab 3 Documentation)

```bash
# Initial setup
git init
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

# Daily workflow
git status
git add .
git commit -m "feat: meaningful commit message"
git push origin feature/your-branch

# Branching
git checkout -b feature/backend
git checkout develop
git merge feature/backend

# Remote
git remote add origin https://github.com/<repo-url>
git pull origin develop
```

---

## 🔗 Team GitHub Profiles

| Member | Role | GitHub |
|---|---|---|
| Shlok Bajaj | Backend Lead | [@ShlokBajaj3433](https://github.com/ShlokBajaj3433) |
| Swaraj Shelar | Frontend Dev | [@swarajshelar23](https://github.com/swarajshelar23) |
| Zuza Haini | UI / Styling | [@zuzahaini](https://github.com/zuzahaini) |

---

## 📝 Local development notes
- Commit 1: Added project note for local testing and workflow validation.
- Commit 2: Expanded documentation with a second guidance bullet for review.
- Commit 3: Added a third note to demonstrate a sequence of local commits.
- Commit 4: Finalized local notes section and ensured all changes were pushed to main.

| Jay Dhakad | Git / QA / Docs | [@jaydhakad8810](https://github.com/jaydhakad8810) |
| Vimanyu Sharma|API Integration & Testing| [@vimanyusharma570](https://github.com/vimanyusharma570-collab) |

---

## ✅ Expected Outcome

- **Lab 2:** A working full-stack StudySync web application demonstrating modern web development practices.
- **Lab 3:** A well-maintained GitHub repository with clear commit history, multiple branches, pull requests, and documented Git commands.
- **Overall:** Hands-on experience in web development and version control with meaningful contribution from every team member.

---

*Lab 2 & 3 | StudySync Project | Team: Shlok · Swaraj · Zuza · Jay*
