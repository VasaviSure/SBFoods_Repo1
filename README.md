**🍽️ SBFOODS — MERN Food Ordering Website**

SBFOODS is a full-stack MERN (MongoDB, Express, React, Node.js) food-ordering web application.
Users can browse menu items, add to cart, place orders, and track them.
Admins can manage menu items and monitor orders in real-time.

🎥 Demo Video: https://youtu.be/9fswRp9sp6o?si=iauPqNskvLn-Rs2v

**🔥 Features**
1. ✅ Customer Side (User App)

  **Food Browsing:** View all available dishes with image, description, and price.

  **Cart Management:** Add/remove items, adjust quantity, and view live cart total.

  **User Authentication**: Login/Signup modal with persistent session storage.

  **Place & Track Orders:** Users can place an order and track its status (Placed → Preparing → Completed).

  **Mobile Responsive Design:** Fully responsive UI for seamless use on phones, tablets, and desktops.
  

2. ✅ Admin Dashboard

  **Add New Food Items:** Upload images and enter price, name, category, and description.

  **Edit/Delete Menu Items:** Manage menu easily via a CRUD interface.

  **View All Orders in Real-Time:** Track orders placed by customers.

  **Update Order Status:** Change progress from Placed → Preparing → Completed.
  

**🛠️ Tech Stack**

**Frontend:** React.js + Vite, CSS + Bootstrap for styling

**State Management**: React Hooks + Context API

**Backend:** Node.js + Express.js

**Database:** MongoDB for storing users, menu items, orders

**Image Uploads:** Supports uploading food images (e.g., via Cloudinary or other storage)

**Routing & API:** RESTful API endpoints for menu, cart, orders, users

**🚀 Setup & Installation**

**1. Clone Repository**

git clone https://github.com/<your-username>/sbfoods.git

cd sbfoods

**2. Setup Customer Frontend**

cd client

npm install

npm run dev

**3. Setup Admin Dashboard**

cd ../admin

npm install

npm run dev

**4. Setup Backend Server**

cd ../server

npm install

npm run dev

**5. Add Environment Variables**

Create .env file inside /server folder:

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_secret_key

