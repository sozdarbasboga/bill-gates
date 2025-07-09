import React from 'react';

const ProductCard = ({ product, balance, quantity, onBuy, onSell, inputQuantity, setInputQuantity }) => {
  const canBuy = balance >= product.price;
  const canSell = quantity > 0;
  const maxBuyable = Math.floor(balance / product.price);

  return (
    <div className="product-card" style={{ border: '1px solid #eee', borderRadius: 12, padding: 20, margin: 8, background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 220 }}>
      <img src={product.image} alt={product.name} style={{ width: 80, height: 80, objectFit: 'contain', marginBottom: 12 }} />
      <h3 style={{ fontSize: '1.1rem', margin: '8px 0' }}>{product.name}</h3>
      <div style={{ color: '#1ed760', fontWeight: 700, marginBottom: 8 }}>${product.price.toLocaleString()}</div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 8, alignItems: 'center' }}>
        <button onClick={() => { onBuy(product.id, inputQuantity); setInputQuantity(inputQuantity + 1); }} disabled={!canBuy || inputQuantity < 1} style={{ background: canBuy ? '#1ed760' : '#eee', color: canBuy ? '#fff' : '#aaa', border: 'none', borderRadius: 6, padding: '6px 16px', fontWeight: 600, cursor: canBuy ? 'pointer' : 'not-allowed' }}>Buy</button>
        <input
          type="number"
          min={0}
          max={maxBuyable}
          value={inputQuantity}
          onChange={e => {
            let val = Number(e.target.value);
            if (val < 0) val = 0;
            if (val > maxBuyable) val = maxBuyable;
            setInputQuantity(val);
          }}
          style={{ width: 50, textAlign: 'center', border: '1px solid #ccc', borderRadius: 4, padding: '4px 0' }}
        />
        <button onClick={() => onSell(product.id, inputQuantity)} disabled={!canSell || inputQuantity < 1} style={{ background: canSell ? '#ff7675' : '#eee', color: canSell ? '#fff' : '#aaa', border: 'none', borderRadius: 6, padding: '6px 16px', fontWeight: 600, cursor: canSell ? 'pointer' : 'not-allowed' }}>Sell</button>
      </div>
    </div>
  );
};

export default ProductCard; 