# 🍽️ SBFOODS — MERN Food Ordering Website

SBFOODS is a full-stack **MERN (MongoDB, Express, React, Node.js)** food ordering web application that allows users to browse dishes, add them to cart, place orders, and track their status in real time.  
Admins can manage menus and update orders through a dedicated dashboard.

🎥 **Demo Video:** https://youtu.be/9fswRp9sp6o?si=iauPqNskvLn-Rs2v


---

## ✅ Features

### 🛒 Customer Side (User App)

| Feature | Description |
|--------|-------------|
| 🍱 Food Browsing | View all dishes with image, price, and description |
| 🛍️ Cart Management | Add/remove items, update quantity, auto-calculate total |
| 🔐 User Authentication | Login/Signup modal with JWT-based session persistence |
| 🚚 Order Placement & Tracking | Track order status: _Placed → Preparing → Completed_ |
| 📱 Fully Responsive UI | Works smoothly on mobile, tablet, and desktop |

---

### 🛠️ Admin Dashboard

| Feature | Description |
|--------|-------------|
| ➕ Add New Food Items | Upload images, set price, category, description |
| ✏️ Edit/Delete Items | Full CRUD (Create, Read, Update, Delete) on menu |
| 📦 View All Orders | See real-time incoming orders from users |
| 🔄 Update Order Status | Change order state (_Placed → Preparing → Completed_) |

---

## 🧰 Tech Stack

| Layer | Technology |
|------|------------|
| Frontend | **React.js + Vite, CSS + Bootstrap** |
| State Management | **Context API + React Hooks** |
| Backend | **Node.js + Express.js** |
| Database | **MongoDB (Mongoose ORM)** |
| Authentication | **JWT** |
| File Uploads | Supports image upload (e.g., Cloudinary)** |
| API Style | RESTful APIs |

---
## 🚀 Setup & Installation

 **1️⃣ Clone the Repository**

git clone https://github.com/<your-username>/sbfoods.git

cd sbfoods

**2️⃣ Start Customer Frontend (User App)**

cd client

npm install

npm run dev

**3️⃣ Start Admin Dashboard**

cd ../admin

npm install

npm run dev


**4️⃣ Start Backend Server**

cd ../server

npm install

npm run dev

**5️⃣ Add Environment Variables**

Create a .env file inside /server folder:

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_secret_key

---
📄 License

This project is released under the MIT License.
