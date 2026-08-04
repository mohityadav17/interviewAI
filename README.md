# 🤖 InterviewAI

InterviewAI is an AI-powered mock interview platform that helps users prepare for technical and behavioral interviews through realistic AI-generated interview sessions. Built with the MERN stack and powered by the OpenRouter API, it provides an interactive interview experience with personalized questions and interview history tracking.

---

## ✨ Features

- 🔐 Secure user authentication using JWT
- 🤖 AI-powered interview generation
- 💼 Technical interview simulations
- 🗣️ Behavioral interview sessions
- 💬 Interactive conversational interface
- 📊 Interview history tracking
- 📱 Responsive and user-friendly interface
- ⚡ Fast and scalable MERN architecture

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- JWT Authentication
- bcryptjs

### Database
- MongoDB
- Mongoose

### AI Integration
- OpenRouter API

---

## 🏗️ Architecture

```text
                User
                  │
                  ▼
          React Frontend
                  │
                  ▼
        Express.js Backend
          │              │
          │              ▼
          │      OpenRouter API
          │
          ▼
       MongoDB
```

---


## 📂 Project Structure

```text
InterviewAI/
│
├── client/
│   ├── public/
│   ├── src/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── package.json
│
├── screenshots/
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/mohityadav17/InterviewAI.git
cd InterviewAI
```

### Install dependencies

Backend

```bash
cd server
npm install
```

Frontend

```bash
cd ../client
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **server** directory.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENROUTER_API_KEY=your_openrouter_api_key
CLIENT_URL=http://localhost:5173
```

---

## ▶️ Run the Project

Start the backend

```bash
cd server
npm run dev
```

Start the frontend

```bash
cd client
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

## 📖 API Overview

### Authentication

- POST `/api/auth/register`
- POST `/api/auth/login`

### Interviews

- POST `/api/interviews/generate`
- GET `/api/interviews/history`
- GET `/api/interviews/:id`

### AI

- POST `/api/ai/interview`

---

## 🔮 Future Improvements

- 🎙️ Voice-based interviews
- 📹 Video interview simulation
- 📈 AI performance analytics
- 📝 Resume-based interview generation
- 🌍 Multi-language support
- 📄 PDF interview reports

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature/your-feature
```

3. Commit your changes.

```bash
git commit -m "Add new feature"
```

4. Push the branch.

```bash
git push origin feature/your-feature
```

5. Open a Pull Request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Mohit Yadav**

- GitHub: https://github.com/mohityadav17
- LinkedIn: https://www.linkedin.com/in/mohit-yadav-234941251/

---

⭐ If you found this project helpful, consider giving it a star!
