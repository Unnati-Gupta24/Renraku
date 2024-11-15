﻿# Renraku

Renraku is a dynamic real-time chat application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Socket.IO integration. The application provides a seamless chatting experience with real-time message delivery and a responsive user interface.

### ✨ Features

1. User Authentication: Secure signup and login functionality <br>
2. Real-time Messaging: Instant message delivery using Socket.IO<br>
3. Responsive Design: Works flawlessly across all device sizes<br>
4. User Search: Find and connect with other users<br>
5. One-on-One Chat: Private conversations between users<br>
6. Group Chat: Create and manage group conversations<br>
7. Profile Management: Update user profiles and avatars<br>
8. Real-time Notifications: Instant notifications for new messages<br>
9. Typing Indicators: Shows when users are typing<br>

### 🛠️ Tech Stack

Frontend
-React.js
-Daisy UI
-Socket.IO-Client
-Axios
-React Router DOM

Backend
-Node.js
-Express.js
-MongoDB
-Socket.IO
-JWT Authentication
-Bcrypt
-Mongoose

### 📋 Prerequisites

Before running the application, ensure you have:<br>
- Node.js installed<br>
- MongoDB installed and running<br>
- npm or yarn package manager<br>

### ⚙️ Installation

1. Clone the repository<br>
```
git clone https://github.com/Unnati-Gupta24/Renraku.git
cd Renraku
```

2. Install backend dependencies<br>
```
cd backend
npm install
```

3. Install frontend dependencies<br>
```
cd frontend
npm install
```

4. Configure environment variables<br>
Create .env file in the backend directory:<br>
```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

5. Start the application<br>
For backend:<br>
```
cd backend
npm start
```

For frontend:<br>
```
cd frontend
npm start
```

### 🏗️ Project Structure

```
Renraku/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── config/
│   │   ├── context/
│   │   ├── Pages/
│   │   └── App.js
│   └── package.json
│
└── backend/
    ├── config/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    └── server.js
```

### API Endpoints

User Routes<br>
- POST /api/user - Register user<br>
- POST /api/user/login - User login<br>
- GET /api/user - Get all users<br>
- GET /api/user?search= - Search users<br><br>

Chat Routes<br>
- POST /api/chat - Access or create chat<br>
- GET /api/chat - Get all chats<br>
- POST /api/chat/group - Create group chatp<br><br>

Message Routes<br>
- POST /api/message - Send message<br>
- GET /api/message/:chatId - Get all messages<br><br>

### 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.<br>
- Fork the repository
- Create your feature branch eg. (git checkout -b feature/AmazingFeature)
- Commit your changes eg. (git commit -m 'Add some AmazingFeature')
- Push to the branch eg. (git push origin feature/AmazingFeature)
- Open a Pull Request

### 👨‍💻 Author
Unnati Gupta - GitHub Profile

### 📄 License
This project is licensed under the MIT License.
<hr>
⭐️ If you found this project helpful, please give it a star!


