# ⚙️ StudySync — Backend (Spring Boot)

> REST API backend for the StudySync Student Task & Notes Manager.  
> Built with **Java 17** and **Spring Boot 3**.

**Owner / Lead:** [Shlok Bajaj](https://github.com/ShlokBajaj3433)  
**Branch:** `feature/backend`

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| Language | Java 17 |
| Framework | Spring Boot 3.x |
| ORM | Spring Data JPA / Hibernate |
| Database (dev) | H2 In-Memory |
| Database (prod) | MySQL |
| Build Tool | Maven |
| API Style | RESTful JSON |

---

## 📁 Package Structure

```
src/main/java/com/studysync/
├── controller/
│   ├── TaskController.java      # /api/tasks endpoints
│   ├── NoteController.java      # /api/notes endpoints
│   └── UserController.java      # /api/users endpoints
├── model/
│   ├── Task.java                # Task entity (id, title, deadline, status)
│   ├── Note.java                # Note entity (id, title, content)
│   └── User.java                # User entity (id, name, email)
├── repository/
│   ├── TaskRepository.java
│   ├── NoteRepository.java
│   └── UserRepository.java
├── service/
│   ├── TaskService.java
│   ├── NoteService.java
│   └── UserService.java
└── StudySyncApplication.java    # Main entry point

src/main/resources/
└── application.properties       # DB config, server port, etc.
```

---

## 🔌 API Endpoints

### Tasks — `/api/tasks`

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/tasks` | Get all tasks |
| `GET` | `/api/tasks/{id}` | Get task by ID |
| `POST` | `/api/tasks` | Create a new task |
| `PUT` | `/api/tasks/{id}` | Update a task |
| `DELETE` | `/api/tasks/{id}` | Delete a task |

**Sample Task JSON:**
```json
{
  "id": 1,
  "title": "Complete Lab 2 report",
  "deadline": "2026-03-01",
  "status": "PENDING",
  "userId": 1
}
```

---

### Notes — `/api/notes`

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/notes` | Get all notes |
| `GET` | `/api/notes/{id}` | Get note by ID |
| `POST` | `/api/notes` | Create a new note |
| `PUT` | `/api/notes/{id}` | Update a note |
| `DELETE` | `/api/notes/{id}` | Delete a note |

**Sample Note JSON:**
```json
{
  "id": 1,
  "title": "Spring Boot Notes",
  "content": "JPA annotations: @Entity, @Id, @GeneratedValue...",
  "userId": 1
}
```

---

### Users — `/api/users`

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/users` | Get all users |
| `POST` | `/api/users` | Register a new user |
| `GET` | `/api/users/{id}` | Get user by ID |

---

## ⚙️ Configuration (`application.properties`)

```properties
# Server
server.port=8080

# H2 In-Memory Database (Development)
spring.datasource.url=jdbc:h2:mem:studysyncdb
spring.datasource.driver-class-name=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.h2.console.enabled=true

# JPA
spring.jpa.hibernate.ddl-auto=create-drop
spring.jpa.show-sql=true
```

---

## 🚀 How to Run

### Prerequisites
- Java 17 or above installed
- Maven installed (or use the Maven wrapper `./mvnw`)

### Steps

```bash
# Clone the repository
git clone https://github.com/<your-repo-url>
cd StudySync-Task_Manager/backend

# Build the project
./mvnw clean install

# Run the application
./mvnw spring-boot:run
```

The API will be available at: **`http://localhost:8080`**  
H2 Console (dev only): **`http://localhost:8080/h2-console`**

---

## 🧪 Testing the API

You can test all endpoints using **Postman** or `curl`:

```bash
# Get all tasks
curl http://localhost:8080/api/tasks

# Create a new task
curl -X POST http://localhost:8080/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Complete Lab 3","deadline":"2026-03-05","status":"PENDING","userId":1}'
```

---

## 🌿 Git Workflow (Lab 3 — Shlok's Contribution)

```bash
# Switch to backend feature branch
git checkout -b feature/backend

# After changes
git add .
git commit -m "feat: add Task CRUD REST API"
git push origin feature/backend

# When ready, raise PR: feature/backend → develop
```

**Commit naming convention used:**
- `feat:` — new feature
- `fix:` — bug fix
- `chore:` — setup/config changes
- `docs:` — documentation

---

## 👤 Contributor

| Name | Role | GitHub |
|---|---|---|
| **Shlok Bajaj** | Backend Lead — Spring Boot, JPA, REST API | [@ShlokBajaj3433](https://github.com/ShlokBajaj3433) |

> Other team members who integrated with this backend:
> - [@swarajshelar23](https://github.com/swarajshelar23) — Frontend API integration
> - [@jaydhakad8810](https://github.com/jaydhakad8810) — QA & integration testing

---

*StudySync Backend | Lab 2 & 3 | Spring Boot REST API*
