import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BillGatesHeader from './components/BillGatesHeader';
import ProductCard from './components/ProductCard';
import Summary from './components/Summary';
import Footer from './components/Footer';
import products from './products';
import GamesModal from './components/GamesModal';
import './App.css';

const App = () => {
  const [balance, setBalance] = useState(100000000000);
  const [cart, setCart] = useState({});
  const [showGames, setShowGames] = useState(false);

  const handleBuy = (productId) => {
    const product = products.find(p => p.id === productId);
    if (balance >= product.price) {
      setBalance(prev => prev - product.price);
      setCart(prev => ({
        ...prev,
        [productId]: (prev[productId] || 0) + 1
      }));
    }
  };

  const handleSell = (productId) => {
    const product = products.find(p => p.id === productId);
    if (cart[productId] > 0) {
      setBalance(prev => prev + product.price);
      setCart(prev => ({
        ...prev,
        [productId]: prev[productId] - 1
      }));
    }
  };

  return (
    <div className="App">
      <Navbar onLogoClick={() => setShowGames(true)} />
      <BillGatesHeader />
      <div className="balance-bar">
        ${balance.toLocaleString()}
      </div>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            balance={balance}
            quantity={cart[product.id] || 0}
            onBuy={handleBuy}
            onSell={handleSell}
          />
        ))}
      </div>
      <Summary cart={cart} balance={balance} />
      <Footer />
      <GamesModal open={showGames} onClose={() => setShowGames(false)} />
    </div>
  );
};

export default App;
