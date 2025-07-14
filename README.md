# Mini E-Commerce SPA

A modern, full-stack single-page application (SPA) built with React.js and Node.js that delivers a complete e-commerce shopping experience with persistent cart functionality, real-time inventory management, and seamless order processing.

## 🌟 Live Demo

Click
[ here ](https://mini-e-commerce-spa-psi.vercel.app/) to see the live demo of the application.

## 🚀 Key Features

### 🛍️ Shopping Experience

- **Product Catalog**: Browse 15 curated products with detailed information
- **Product Details**: Individual pages with ratings, stock status, and comprehensive descriptions
- **Persistent Shopping Cart**: Full-featured cart with backend persistence across browser sessions
- **Real-time Inventory**: Dynamic stock tracking that updates as items are added/removed
- **Session Management**: Unique session-based cart storage for guest users
- **Checkout Process**: Complete order form with validation and order simulation

### 🔧 Technical Features

- **API Integration**: RESTful backend API for products and cart operations
- **Cross-tab Sync**: Same cart across multiple browser tabs
- **Stock Synchronization**: Real-time inventory updates across all components
- **Form Validation**: Complete checkout form with required field validation
- **Loading States**: Professional loading indicators during operations
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

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

### Deployment

- **Frontend**: Vercel
- **Backend**: Railway
- **Database**: MongoDB Atlas

## 📦 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- MongoDB Atlas account

### 🚀 Try the Live Demo

Visit the deployed application: [https://mini-e-commerce-spa-psi.vercel.app/](https://mini-e-commerce-spa-psi.vercel.app/)

The backend API is already deployed, so you can experience the full functionality immediately!

### 💻 Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/whiteblueskyss/Mini-E-Commerce-SPA.git
   cd Mini-E-Commerce-SPA
   ```

2. **Frontend Setup (Required)**

   ```bash
   cd frontend
   npm install
   npm run dev
   ```

   **Access**: `http://localhost:5173`

3. **Backend Setup (Optional)**

   The frontend connects to the deployed backend by default. For local backend development:

   ```bash
   cd backend
   npm install
   ```

   Create `.env` file:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

   ```bash
   npm start
   ```

   **Access**: `http://localhost:5000/api` update frontend `service/api.js` file with this url.

4. **Database Setup**
   - Use the provided product data in `frontend/src/utility/products.js`
   - Import products to your local MongoDB collection
   - The deployed version already has populated data

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
└── package.json                # Root package file
└── README.md
```

## 🎯 Core Functionality

### 🛒 Shopping Cart & Persistence

- **Add/Remove Items**: Toggle products in/out of cart with real-time updates
- **Quantity Management**: Increase/decrease item quantities with stock validation
- **Backend Persistence**: Cart data saved to MongoDB for cross-session persistence
- **Session-based Storage**: Unique session IDs for guest user carts
- **Cross-browser Sync**: Same cart across multiple tabs and browser sessions
- **Stock Synchronization**: Inventory decreases when items are added to cart
- **Subtotal Calculation**: Automatic price calculation with delivery fee

### 📦 Product Management

- **15 Demo Products**: Electronics, clothing, accessories, and home items
- **API Integration**: Products loaded from backend API endpoints
- **Product Details**: Name, price, description, brand, category, stock, and ratings
- **Stock Tracking**: Real-time inventory management with visual stock indicators
- **Product Images**: High-quality images from Unsplash

### 🔗 API Architecture

- **RESTful Design**: Clean API endpoints for products and cart operations
- **GET /api/products**: Fetch all products from database
- **GET /api/cart/:sessionId**: Retrieve cart for specific session
- **POST /api/cart/:sessionId**: Save cart items to database
- **Error Handling**: Comprehensive error responses and logging
- **CORS Support**: Cross-origin requests for frontend-backend communication

### 🎨 User Interface

- **Responsive Design**: Mobile-first approach with tablet and desktop optimization
- **Interactive Elements**: Hover effects and smooth transitions
- **Loading States**: Professional loading indicators during operations
- **Form Validation**: Complete checkout form with required field validation
- **Success Messages**: Order confirmation with automatic redirection

## 🔧 Technical Implementation

### Frontend Architecture

- **Context API**: Global state management for cart and products
- **Custom Hooks**: Reusable cart operations and API calls
- **Session Management**: Unique session ID generation and persistence
- **API Integration**: Fetch-based HTTP client for backend communication
- **Component Structure**: Modular, reusable React components

### Backend Architecture

- **Express.js Server**: RESTful API with middleware support
- **MongoDB Integration**: Mongoose ODM for data modeling
- **Environment Variables**: Secure configuration management
- **Error Handling**: Comprehensive error responses and logging
- **CORS Configuration**: Secure cross-origin request handling

### Database Schema

```javascript
// Cart Model
{
  sessionId: String,     // Unique session identifier
  items: [{
    id: Number,          // Product ID
    name: String,        // Product name
    image: String,       // Product image URL
    price: Number,       // Product price
    quantity: Number     // Item quantity in cart
  }],
  timestamps: true       // Created/updated timestamps
}

// Product Model
{
  id: Number,           // Unique product ID
  title: String,        // Product name
  price: Number,        // Product price
  image: String,        // Product image URL
  description: String,  // Product description
  category: String,     // Product category
  brand: String,        // Product brand
  stock: Number,        // Available stock
  rating: Number,       // Average rating
  reviews: Number       // Number of reviews
}
```

## 👨‍💻 Author

**whiteblueskyss**

- GitHub: [@whiteblueskyss](https://github.com/whiteblueskyss)

---
