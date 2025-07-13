# Mini E-Commerce SPA

A modern, full-stack single-page application (SPA) built with React.js and Node.js that provides a complete e-commerce shopping experience with persistent cart functionality, real-time inventory management, and order processing.

## 🚀 Features

### Core Functionality

- **Product Catalog**: Browse through 15 curated products with detailed information
- **Product Details**: Individual product pages with ratings, stock status, and comprehensive descriptions
- **Persistent Shopping Cart**: Full-featured cart with backend persistence across browser sessions
- **Real-time Inventory**: Dynamic stock tracking that updates as items are added/removed from cart
- **Session Management**: Unique session-based cart storage for guest users
- **API Integration**: RESTful backend API for products and cart operations
- **Checkout Process**: Complete order form with customer information and order simulation
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### User Experience

- **Interactive Product Cards**: Hover effects and smooth transitions
- **Sidebar Cart**: Slide-out cart with item management
- **Stock Synchronization**: Real-time inventory updates across all components
- **Cart Persistence**: Cart items survive page refreshes and browser sessions
- **Form Validation**: Complete checkout form with required field validation
- **Loading States**: Professional loading indicators during order processing
- **Success Messages**: Order confirmation with automatic redirection
- **Cross-tab Sync**: Same cart across multiple browser tabs

## Live Demo

Check out the live application [here](https://mini-e-commerce-spa-psi.vercel.app/).

## 🛠️ Tech Stack

### Frontend

- **React.js 19+** - Modern React with hooks and functional components
- **React Router DOM** - Client-side routing for SPA navigation
- **React Context API** - Global state management for cart and products
- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **Vite** - Fast build tool and development server
- **Custom Hooks** - Reusable logic for cart operations

### Backend

- **Node.js & Express.js** - RESTful API server
- **MongoDB Atlas** - Cloud database for cart persistence
- **Mongoose** - MongoDB object modeling and schema validation
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management
- **Session Management** - Unique session-based cart storage

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- MongoDB Atlas account (for cart persistence)

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/whiteblueskyss/Mini-E-Commerce-SPA.git
   cd Mini-E-Commerce-SPA
   ```

2. **Backend Setup**

   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the backend directory:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

3. **Frontend Setup**

   ```bash
   cd ../frontend
   npm install
   ```

4. **Start the application**

   **Backend (in one terminal):**

   ```bash
   cd backend
   npm start
   ```

   **Frontend (in another terminal):**

   ```bash
   cd frontend
   npm run dev
   ```

5. **Open in browser**

   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:5000/api/products` and `http://localhost:5000/api/cart`

6. **Add dummy products**
   - Use the provided `dummyData.js` file to populate the database with initial product data.
   - You can run a script or use a database client to insert the dummy products into your MongoDB collection.

## 🏗️ Project Structure

```
Mini-E-Commerce-SPA/
├── frontend/                     # React.js frontend application
│   ├── src/
│   │   ├── components/           # React components
│   │   │   ├── AllProducts.jsx   # Main product listing page
│   │   │   ├── CheckoutModal.jsx # Order checkout modal
│   │   │   ├── Header.jsx        # Navigation header
│   │   │   ├── ProductCard.jsx   # Individual product cards
│   │   │   ├── ProductDetails.jsx # Product detail page
│   │   │   └── SidebarCart.jsx   # Shopping cart sidebar
│   │   ├── context/              # Context providers
│   │   │   └── index.js          # Cart and Product contexts
│   │   ├── hooks/                # Custom hooks
│   │   │   └── useCartActions.js # Cart operations hook
│   │   ├── services/             # API services
│   │   │   └── api.js            # Product and cart API calls
│   │   ├── utility/              # Utility functions
│   │   │   ├── products.js       # Static product data
│   │   │   ├── session.js        # Session management
│   │   │   └── RatingStars.jsx   # Star rating component
│   │   ├── assets/               # SVG icons and assets
│   │   │   └── Svgs.jsx          # Icon components
│   │   ├── App.jsx               # Main app component
│   │   └── main.jsx              # App entry point
│   ├── index.html
│   └── package.json
├── backend/                      # Node.js backend API
│   ├── models/                   # Database models
│   │   ├── Cart.js              # Cart schema
│   │   └── Product.js           # Product schema
│   ├── routes/                   # API routes
│   │   ├── cart.js              # Cart endpoints
│   │   └── products.js          # Product endpoints
│   ├── index.js                 # Main server file
│   ├── package.json
│   └── .env                     # Environment variables
└── README.md
```

## 🎯 Key Features

### Product Management

- **15 Demo Products**: Electronics, clothing, accessories, and home items
- **API Integration**: Products loaded from backend API endpoints
- **Product Details**: Name, price, description, brand, category, stock, and ratings
- **Stock Tracking**: Real-time inventory management with visual stock indicators
- **Product Images**: High-quality images from Unsplash

### Shopping Cart & Persistence

- **Add/Remove Items**: Toggle products in/out of cart
- **Quantity Management**: Increase/decrease item quantities with stock validation
- **Real-time Updates**: Cart count and totals update instantly
- **Backend Persistence**: Cart data saved to MongoDB for persistence
- **Session-based Storage**: Unique session IDs for guest user carts
- **Cross-browser Sync**: Same cart across multiple tabs and browser sessions
- **Stock Synchronization**: Inventory decreases when items are added to cart
- **Subtotal Calculation**: Automatic price calculation with delivery fee

### API Architecture

- **RESTful Design**: Clean API endpoints for products and cart operations
- **GET /api/products**: Fetch all products from database
- **GET /api/cart/:sessionId**: Retrieve cart for specific session
- **POST /api/cart/:sessionId**: Save cart items to database
- **Error Handling**: Comprehensive error responses and logging
- **CORS Support**: Cross-origin requests for frontend-backend communication

### Checkout Process

- **Order Form**: Customer name, email, and delivery address
- **Form Validation**: Required field validation with error messages
- **Order Simulation**: 1.5-second processing simulation with loading state
- **Order Confirmation**: Success message with order total
- **Cart Clearing**: Automatic cart cleanup after successful order
- **Navigation**: Automatic redirect to homepage after order completion

### Responsive Design

- **Mobile-First**: Optimized for mobile devices
- **Tablet Support**: Responsive grid layouts
- **Desktop Enhanced**: Hover effects and expanded layouts
- **Touch-Friendly**: Large buttons and touch targets

## 🔧 Technical Implementation

### Frontend Architecture

- **Context API**: Global state management for cart and products
- **Custom Hooks**: Reusable cart operations and API calls
- **Session Management**: Unique session ID generation and persistence
- **API Integration**: Fetch-based HTTP client for backend communication

### Backend Architecture

- **Express.js Server**: RESTful API with middleware support
- **MongoDB Integration**: Mongoose ODM for data modeling
- **Environment Variables**: Secure configuration management
- **Error Handling**: Comprehensive error responses and logging

## 👨‍💻 Author

**whiteblueskyss**

- GitHub: [@whiteblueskyss](https://github.com/whiteblueskyss)

---
