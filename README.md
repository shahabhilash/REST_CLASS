## 🚀 REST_CLASS – REST API Learning Project

This is a simple **REST API** project built using **Node.js** and **Express.js** to understand the fundamentals of **RESTful APIs** and **CRUD operations**.

---

## 📌 What I Learned
- 🌐 REST API basics
- 🔄 CRUD operations (**Create, Read, Update, Delete**)
- 📥 GET requests
- 📤 POST requests
- ✏️ PUT / PATCH requests
- ❌ DELETE requests
- 🆔 Generating unique IDs using `uuid`
- 🧩 Handling JSON data in Express

---

## 🛠 Tech Stack
- 🟢 Node.js
- ⚡ Express.js
- 🆔 UUID (npm package)

---

## 📂 Project Features
- Store simple user data (name)
- Each user has a **unique ID**
- Perform full **CRUD operations**
- Data handled in **JSON format**

---

## 🔄 CRUD Operations

| Operation | Method | Endpoint | Description |
|---------|--------|----------|-------------|
| Create | POST | `/users` | Add a new user |
| Read | GET | `/users` | Get all users |
| Read | GET | `/users/:id` | Get a user by ID |
| Update | PUT / PATCH | `/users/:id` | Update user information |
| Delete | DELETE | `/users/:id` | Delete a user |

---

## 📥 Example User Data
```json
{
  "id": "uuid-generated-id",
  "name": "John Doe"
}

