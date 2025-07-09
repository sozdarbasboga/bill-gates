import React from 'react';
import products from '../products';

function formatShortPrice(price) {
  if (price >= 1_000_000_000) return `$${(price / 1_000_000_000).toFixed(0)}b`;
  if (price >= 1_000_000) return `$${(price / 1_000_000).toFixed(0)}m`;
  if (price >= 1_000) return `$${(price / 1_000).toFixed(0)}k`;
  return `$${price}`;
}

const Summary = ({ balance, inputQuantities }) => {
  const inputSelected = Object.entries(inputQuantities || {}).filter(([_, qty]) => qty > 0);
  const inputTotal = inputSelected.reduce((sum, [id, qty]) => {
    const product = products.find(p => p.id === Number(id));
    return sum + (product ? product.price * qty : 0);
  }, 0);

  return (
    <div style={{ background: '#fff', borderRadius: 0, padding: 32, margin: '16px auto 16px auto', maxWidth: 920, textAlign: 'center', boxShadow: '0 2px 12px #e0e0e0' }}>
      <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 32 }}>Your Receipt</h2>
      {inputSelected.length === 0 ? (
        <div style={{ color: '#888', fontSize: 12 }}>No items selected.</div>
      ) : (
        <>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 16 }}>
            {inputSelected.map(([id, qty]) => {
              const product = products.find(p => p.id === Number(id));
              return product ? (
                <div key={id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 48, fontSize: 14, fontWeight: 500, marginBottom: 8 }}>
                  <span style={{ minWidth: 180, textAlign: 'right' }}>{product.name}</span>
                  <span style={{ minWidth: 60, textAlign: 'center', fontWeight: 700 }}>x{qty}</span>
                  <span style={{ minWidth: 120, textAlign: 'left', color: '#1ed760', fontWeight: 700 }}>{formatShortPrice(product.price)}</span>
                </div>
              ) : null;
            })}
          </div>
          <div style={{ borderTop: '1px solid #222', width: 300, margin: '14px auto 0 auto' }} />
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 48, marginTop: 18, fontSize: 14, fontWeight: 700 }}>
            <span style={{ minWidth: 180, textAlign: 'right', color: '#222' }}>TOTAL</span>
            <span style={{ minWidth: 60 }}></span>
            <span style={{ minWidth: 120, textAlign: 'left', color: '#1ed760', fontWeight: 700 }}>${inputTotal.toLocaleString()}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Summary; 