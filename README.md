# BotFusion Backend

[![Node.js](https://img.shields.io/badge/Node.js-v25.2.1-brightgreen)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-v4.18.2-blue)](https://expressjs.com/)
[![License](https://img.shields.io/badge/License-Apache2.0-green)](LICENSE)

---

## 🔹 Overview

BotFusion Backend is the **server-side application** for the BotFusion AI project.  
It is built using **Node.js** and **Express.js** and provides APIs for handling chat messages.  

The backend:
- Handles API requests from the frontend or other clients.
- Responds to chat messages in JSON format.
- Supports CORS for cross-origin requests.
- Is ready to deploy on any platform (Termux, Railway, Render, Heroku, VPS, etc.).

This backend is lightweight, fast, and modular, allowing easy integration with AI APIs or custom logic.

---

## 🔹 Features

- **Express.js server**: Handles HTTP requests efficiently.
- **Chat API**: `/api/chat` endpoint for POST requests.
- **CORS enabled**: Allows frontend apps to communicate with backend.
- **Environment-friendly**: Supports custom ports with `process.env.PORT`.
- **Clean folder structure**: Organized routes and main server file.
- **Production-ready**: Ready for deployment on servers or cloud platforms.

---

## 🔹 Folder Structure

```text
backend/
├── api/
│   ├── index.js            # Main server entry point
│   └── routes/
│       └── chat.js         # Chat endpoint logic
├── package.json            # Node.js project configuration
├── .gitignore              # Ignore node_modules and sensitive files
└── README.md               # Project documentation
