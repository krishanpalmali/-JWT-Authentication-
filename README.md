# JWT Authentication API

A simple JWT Authentication API built with **Node.js, Express.js, MongoDB, JWT, and bcrypt.js**.
This project provides secure user authentication with Register, Login, Protected Routes, Update, and Delete functionalities.

---

# 🚀 Features

* User Registration
* User Login
* Password Hashing using bcrypt.js
* JWT Token Authentication
* Protected Routes
* Update User
* Delete User
* MongoDB Database Integration
* REST API Structure

---

# 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (jsonwebtoken)
* bcrypt.js
* dotenv
* cors

---

# 📂 Project Structure

```bash
JWT-Authentication/
│
├── Models/
│   └── user.Model.js
│
├── Routes/
│   └── user.Routes.js
│
├── Middleware/
│   └── auth.js
│
├── .env
├── server.js
├── package.json
└── README.md
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/JWT-Authentication.git
```

## 2️⃣ Move into Project Folder

```bash
cd JWT-Authentication
```

## 3️⃣ Install Dependencies

```bash
npm install
```

## 4️⃣ Create `.env` File

```env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

## 5️⃣ Start Server

```bash
node server.js
```

or

```bash
npm start
```

---

# 🌐 API Endpoints

## Register User

```http
POST /api/users/register
```

### Body

```json
{
  "username": "kp mali",
  "email": "kp@gmail.com",
  "password": "123456"
}
```

---

## Login User

```http
POST /api/users/login
```

### Body

```json
{
  "email": "kp@gmail.com",
  "password": "123456"
}
```

---

## Get All Users

```http
GET /api/users
```

---

## Update User

```http
PUT /api/users/update/:id
```

---

## Delete User

```http
DELETE /api/users/delete/:id
```

---

# 🔐 JWT Authentication

After login, a JWT token is generated.

Example:

```json
{
  "token": "your_jwt_token"
}
```

Use this token in headers:

```http
Authorization: Bearer your_jwt_token
```

---

# 📸 Example Response

```json
{
  "message": "Login Successful",
  "token": "jwt_token_here"
}
```

---

# 🧪 Testing APIs

You can test APIs using:

* Postman
* Thunder Client
* Hoppscotch

---

# 👨‍💻 Author

**Krishan Pal Mali**

* Full Stack Developer
* Learning MERN Stack & Backend Development

---

# ⭐ Future Improvements

* Refresh Tokens
* Forgot Password
* Email Verification
* Role Based Authentication
* OTP Authentication

---

# 📜 License

This project is open-source and free to use.
