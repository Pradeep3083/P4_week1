import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import CategoriesPage from './pages/CategoriesPage';
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CollectionPage from './pages/CollectionPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import Products from './pages/admin/Products';
import Customers from './pages/admin/Customers';
import Orders from './pages/admin/Orders';
import Settings from './pages/admin/Settings';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';

function App() {
  const [cart, setCart] = useState([]);

  // Sample clothing products data
  const products = [
    {
      id: '1',
      name: 'Classic Cotton T-Shirt',
      description:
        'Premium cotton t-shirt with a comfortable fit and breathable fabric.',
      price: 29.99,
      image:
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      category: 'Men',
      collection: 'casual',
      size: ['S', 'M', 'L', 'XL'],
      color: ['White', 'Black', 'Navy'],
    },
    {
      id: '2',
      name: 'Floral Summer Dress',
      description: 'Beautiful floral print dress perfect for summer occasions.',
      price: 59.99,
      image:
        'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      category: 'Women',
      collection: 'summer',
      size: ['XS', 'S', 'M', 'L'],
      color: ['Blue', 'Pink'],
    },
    {
      id: '3',
      name: 'Kids Denim Overalls',
      description: 'Durable and cute denim overalls for active kids.',
      price: 39.99,
      image:
        'https://images.unsplash.com/photo-1519278409-1f56fdda7fe5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      category: 'Kids',
      collection: 'casual',
      size: ['2T', '3T', '4T', '5T'],
      color: ['Light Blue', 'Dark Blue'],
    },
    {
      id: '4',
      name: 'Winter Parka',
      description: 'Warm and stylish winter parka for cold weather.',
      price: 129.99,
      image:
        'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      category: 'Men',
      collection: 'winter',
      size: ['S', 'M', 'L', 'XL'],
      color: ['Black', 'Navy', 'Green'],
    },
  ];

  const handleAddToCart = (product, size, color) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) =>
          item.id === product.id && item.size === size && item.color === color
      );
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id && item.size === size && item.color === color
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, size, color, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id, size, color, quantity) => {
    setCart((prevCart) => {
      if (quantity <= 0) {
        return prevCart.filter(
          (item) =>
            !(item.id === id && item.size === size && item.color === color)
        );
      }
      return prevCart.map((item) =>
        item.id === id && item.size === size && item.color === color
          ? { ...item, quantity }
          : item
      );
    });
  };

  const handleRemoveFromCart = (id, size, color) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) =>
          !(item.id === id && item.size === size && item.color === color)
      )
    );
  };

  return (
    <Router>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/customers" element={<Customers />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/settings" element={<Settings />} />
        
        {/* Public Routes */}
        <Route
          path="/*"
          element={
            <div className="min-h-screen flex flex-col">
              <Navbar cartItemCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
              <main className="flex-grow">
                <Routes>
                  <Route
                    path="/"
                    element={<HomePage products={products} onAddToCart={handleAddToCart} />}
                  />
                  <Route
                    path="/shop"
                    element={<ShopPage products={products} onAddToCart={handleAddToCart} />}
                  />
                  <Route path="/categories" element={<CategoriesPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route
                    path="/cart"
                    element={
                      <CartPage
                        cart={cart}
                        onUpdateQuantity={handleUpdateQuantity}
                        onRemoveFromCart={handleRemoveFromCart}
                      />
                    }
                  />
                  <Route
                    path="/checkout"
                    element={<CheckoutPage cart={cart} />}
                  />
                  <Route 
                    path="/order-confirmation" 
                    element={<OrderConfirmationPage />} 
                  />
                  <Route
                    path="/product/:productId"
                    element={
                      <ProductDetailsPage
                        products={products}
                        onAddToCart={handleAddToCart}
                      />
                    }
                  />
                  <Route
                    path="/collection/:category"
                    element={
                      <CollectionPage
                        products={products}
                        onAddToCart={handleAddToCart}
                      />
                    }
                  />
                </Routes>
              </main>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;