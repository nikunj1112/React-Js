# 🧑 User Card Component

A simple and elegant **React component** to display user details (Name, Username, Email, Phone) with a modern **Glassmorphism UI**.  
Includes a **Copy Phone Number** feature for quick sharing.

---

## 🚀 Features
- 📝 Display user information (Name, Username, Email, Phone)  
- 📋 One-click **Copy Phone Number to Clipboard**  
- 🎨 Modern **Glassmorphism Card UI**  
- ⚡ Built with **React Functional Component & Props**  
- 💻 Responsive and reusable  

---

## 🖼️ Preview


<img width="1437" height="811" alt="profileDeck" src="https://github.com/user-attachments/assets/148e070b-e78d-4f96-969e-1c044749484c" />


---

## 🛠️ Tech Stack
- **React.js** ⚛️  
- **CSS3 (Glassmorphism UI)** 🎨  

---

## 📂 Project Structure

UserCard/
│── src/
│ ├── User.jsx # User Card Component
│ ├── User.css # Styling file
│ └── App.jsx # Example usage
│
└── public/
└── index.html


---


## 📌 Props
| Prop      | Type     | Description                        |
|-----------|----------|------------------------------------|
| `name`    | string   | Full name of the user              |
| `username`| string   | Username/handle of the user        |
| `email`   | string   | Email address of the user          |
| `phone`   | string   | Phone number (click to copy)       |


---

## ▶️ How to Use

1. Import the `User` component in your React project:
   ```jsx
   import User from './User';


2.Use it with props:
<User 
   name="John Doe" 
   username="johndoe" 
   email="john@example.com" 
   phone="+91 9876543210" 
/>

---

## 📌 Future Enhancements

✅ Add Profile Picture support 🖼️

✅ Add Social Media links 🔗

✅ Dark/Light Theme Toggle 🌙☀️

---

## 👨‍💻 Author

Developed by Rana Nikunj ✨
📌 GitHub: nikunj1112.

---
