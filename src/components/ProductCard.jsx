import React from 'react';

const ProductCard = ({ product, balance, quantity, onBuy, onSell }) => {
  const canBuy = balance >= product.price;
  const canSell = quantity > 0;

  return (
    <div className="product-card" style={{ border: '1px solid #eee', borderRadius: 12, padding: 20, margin: 8, background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 220 }}>
      <img src={product.image} alt={product.name} style={{ width: 80, height: 80, objectFit: 'contain', marginBottom: 12 }} />
      <h3 style={{ fontSize: '1.1rem', margin: '8px 0' }}>{product.name}</h3>
      <div style={{ color: '#1ed760', fontWeight: 700, marginBottom: 8 }}>${product.price.toLocaleString()}</div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
        <button onClick={() => onBuy(product.id)} disabled={!canBuy} style={{ background: canBuy ? '#1ed760' : '#eee', color: canBuy ? '#fff' : '#aaa', border: 'none', borderRadius: 6, padding: '6px 16px', fontWeight: 600, cursor: canBuy ? 'pointer' : 'not-allowed' }}>Buy</button>
        <button onClick={() => onSell(product.id)} disabled={!canSell} style={{ background: canSell ? '#ff7675' : '#eee', color: canSell ? '#fff' : '#aaa', border: 'none', borderRadius: 6, padding: '6px 16px', fontWeight: 600, cursor: canSell ? 'pointer' : 'not-allowed' }}>Sell</button>
      </div>
      {quantity > 0 && <div style={{ fontSize: 14, color: '#555' }}>Adet: {quantity}</div>}
    </div>
  );
};

export default ProductCard; 