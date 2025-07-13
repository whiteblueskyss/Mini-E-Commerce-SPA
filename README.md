# Mini E-Commerce SPA

A modern, responsive single-page application (SPA) built with React.js that provides a complete e-commerce shopping experience with real-time inventory management and order processing.

## 🚀 Features

### Core Functionality

- **Product Catalog**: Browse through 15 curated products with detailed information
- **Product Details**: Individual product pages with ratings, stock status, and comprehensive descriptions
- **Shopping Cart**: Full-featured cart with quantity management and real-time updates
- **Real-time Inventory**: Dynamic stock tracking that updates as items are added/removed from cart
- **Checkout Process**: Complete order form with customer information and order simulation
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### User Experience

- **Interactive Product Cards**: Hover effects and smooth transitions
- **Sidebar Cart**: Slide-out cart with item management
- **Stock Synchronization**: Real-time inventory updates across all components
- **Form Validation**: Complete checkout form with required field validation
- **Loading States**: Professional loading indicators during order processing
- **Success Messages**: Order confirmation with automatic redirection

## Live Demo

Check the live aplication [here](https://mini-e-commerce-spa-psi.vercel.app/).

## 🛠️ Tech Stack

- **React.js 19+** - Modern React with hooks and functional components
- **React Router DOM** - Client-side routing for SPA navigation
- **React Context API** - Global state management for cart and products
- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **Vite** - Fast build tool and development server
- **Custom Hooks** - Reusable logic for cart operations

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/whiteblueskyss/Mini-E-Commerce-SPA.git
   cd Mini-E-Commerce-SPA
   ```

2. **Navigate to frontend directory**

   ```bash
   cd frontend
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
Mini-E-Commerce-SPA/
├── frontend/
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
│   │   ├── assets/               # SVG icons and assets
│   │   │   └── Svgs.jsx          # Icon components
│   │   ├── utility/              # Utility components
│   │   │   ├── products.js       # Product data
│   │   │   └── RatingStars.jsx   # Star rating component
│   │   ├── App.jsx               # Main app component
│   │   └── main.jsx              # App entry point
│   ├── index.html
│   └── package.json
└── README.md
```

## 🎯 Key Features

### Product Management

- **15 Demo Products**: Electronics, clothing, accessories, and home items
- **Product Details**: Name, price, description, brand, category, stock, and ratings
- **Stock Tracking**: Real-time inventory management with visual stock indicators
- **Product Images**: High-quality images from Unsplash

### Shopping Cart

- **Add/Remove Items**: Toggle products in/out of cart
- **Quantity Management**: Increase/decrease item quantities with stock validation
- **Real-time Updates**: Cart count and totals update instantly
- **Stock Synchronization**: Inventory decreases when items are added to cart
- **Subtotal Calculation**: Automatic price calculation with delivery fee

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

## 👨‍💻 Author

**whiteblueskyss**

- GitHub: [@whiteblueskyss](https://github.com/whiteblueskyss)

---
