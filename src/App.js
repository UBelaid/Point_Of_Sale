import React, { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Keypad from "./components/Keypad";
import Total from "./components/Total";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [products] = useState([
    { id: 1, name: " Oranges", price: 1.98, image: "path-to-image" },
    { id: 2, name: "Red Pepper", price: 3.1, image: "path-to-image" },
    // Add more products here
  ]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <ProductList products={products} addToCart={addToCart} />
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>
      <Keypad />
      <Total cart={cart} />
    </div>
  );
}

export default App;
