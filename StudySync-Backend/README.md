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
src/main/java/com/StudySync/StudySync/Backend/
├── controller/
│   ├── UserController.java      # GET/POST/PUT/DELETE /api/users
│   ├── TaskController.java      # GET/POST/PUT/DELETE /api/tasks
│   └── NoteController.java      # GET/POST/PUT/DELETE /api/notes
├── model/
│   ├── User.java                # User entity (id, name, email) — OneToMany Tasks & Notes
│   ├── Task.java                # Task entity (id, title, description, deadline, status, user)
│   └── Note.java                # Note entity (id, title, content, user)
├── repository/
│   ├── UserRepository.java      # findByEmail, existsByEmail
│   ├── TaskRepository.java      # findByUserId, findByUserIdAndStatus
│   └── NoteRepository.java      # findByUserId
├── service/
│   ├── UserService.java         # create, read, update, delete users
│   ├── TaskService.java         # create, read (by user/status), update, delete tasks
│   └── NoteService.java         # create, read (by user), update, delete notes
└── StudySyncBackendApplication.java   # Main entry point

src/main/resources/
└── application.properties       # H2 DB config, JPA settings, server port
```

---

## 🔌 API Endpoints

### Tasks — `/api/tasks`

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/tasks` | Get all tasks |
| `GET` | `/api/tasks/{id}` | Get task by ID |
| `GET` | `/api/tasks/user/{userId}` | Get all tasks for a user |
| `GET` | `/api/tasks/user/{userId}/status/{status}` | Filter tasks by status (`PENDING`, `IN_PROGRESS`, `COMPLETED`) |
| `POST` | `/api/tasks/user/{userId}` | Create a new task for a user |
| `PUT` | `/api/tasks/{id}` | Update a task |
| `DELETE` | `/api/tasks/{id}` | Delete a task |

**Sample Task JSON:**
```json
{
  "title": "Complete Lab 2 report",
  "description": "Include screenshots and commands used",
  "deadline": "2026-03-01",
  "status": "PENDING"
}
```

---

### Notes — `/api/notes`

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/notes` | Get all notes |
| `GET` | `/api/notes/{id}` | Get note by ID |
| `GET` | `/api/notes/user/{userId}` | Get all notes for a user |
| `POST` | `/api/notes/user/{userId}` | Create a new note for a user |
| `PUT` | `/api/notes/{id}` | Update a note |
| `DELETE` | `/api/notes/{id}` | Delete a note |

**Sample Note JSON:**
```json
{
  "title": "Spring Boot Notes",
  "content": "JPA annotations: @Entity, @Id, @GeneratedValue..."
}
```

---

### Users — `/api/users`

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/users` | Get all users |
| `GET` | `/api/users/{id}` | Get user by ID |
| `POST` | `/api/users` | Register a new user |
| `PUT` | `/api/users/{id}` | Update a user |
| `DELETE` | `/api/users/{id}` | Delete a user |

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
# Create a user
curl -X POST http://localhost:8080/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Shlok Bajaj","email":"shlok@studysync.com"}'

# Get all users
curl http://localhost:8080/api/users

# Create a task for user 1
curl -X POST http://localhost:8080/api/tasks/user/1 \
  -H "Content-Type: application/json" \
  -d '{"title":"Complete Lab 3","description":"Git & GitHub lab","deadline":"2026-03-05","status":"PENDING"}'

# Get all tasks for user 1
curl http://localhost:8080/api/tasks/user/1

# Get tasks by status
curl http://localhost:8080/api/tasks/user/1/status/PENDING

# Create a note for user 1
curl -X POST http://localhost:8080/api/notes/user/1 \
  -H "Content-Type: application/json" \
  -d '{"title":"Spring Boot Notes","content":"@Entity, @Id, @GeneratedValue are JPA annotations"}'

# Update a task
curl -X PUT http://localhost:8080/api/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"title":"Complete Lab 3","status":"COMPLETED"}'

# Delete a note
curl -X DELETE http://localhost:8080/api/notes/1
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

## 📜 Commit History (Lab 3 — Git Log)

| Step | Commit Message | Files Added |
|---|---|---|
| Branch | `git checkout -b feature/backend` | — |
| Step 1 | `step 1: configure dependencies (JPA, H2, Lombok) and application.properties` | `pom.xml`, `application.properties` |
| Step 2 | `step 2: add JPA model entities - User, Task, Note with relationships` | `User.java`, `Task.java`, `Note.java` |
| Step 3 | `step 3: add Spring Data JPA repositories - UserRepository, TaskRepository, NoteRepository` | `UserRepository.java`, `TaskRepository.java`, `NoteRepository.java` |
| Step 4 | `step 4: add service layer - UserService, TaskService, NoteService with business logic` | `UserService.java`, `TaskService.java`, `NoteService.java` |
| Step 5 | `step 5: add REST controllers - UserController, TaskController, NoteController (full CRUD)` | `UserController.java`, `TaskController.java`, `NoteController.java` |
| Step 6 | `step 6: update backend README with final structure, endpoints and commit log` | `README.md` |

---

*StudySync Backend | Lab 2 & 3 | Spring Boot REST API | Shlok Bajaj — [@ShlokBajaj3433](https://github.com/ShlokBajaj3433)*
