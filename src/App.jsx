import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // TODO: Implement state for dark mode toggle
const [darkMode, setDarkMode] = useState(false);
  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // TODO: Implement state for cart management
  const [cart, setCart] = useState([]);
  function addToCart(product) {
    setCart(prevCart => [...prevCart, product]);
  };

  // TODO: Implement state for category filtering
  const [selectedCategory, setSelectedCategory] = useState('all');
  function categoryChange(event) {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
      <div className={`app ${darkMode ? 'dark' : 'light'}`}>
        <DarkModeToggle onToggle={handleToggleDarkMode} isDarkMode={darkMode} />
      
      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select value={selectedCategory} onChange={categoryChange}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      {/* TODO: Implement and render Cart component */}
      <ProductList addToCart={addToCart} category={selectedCategory} />

      <Cart cartItems={cart} />
      </div>
  </div>
  );
};

export default App;