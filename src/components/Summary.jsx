import React from 'react';
import products from '../products';

const Summary = ({ balance, inputQuantities }) => {
  // Sadece inputQuantities ile gösterim yap
  const inputSelected = Object.entries(inputQuantities || {}).filter(([_, qty]) => qty > 0);
  const inputTotal = inputSelected.reduce((sum, [id, qty]) => {
    const product = products.find(p => p.id === Number(id));
    return sum + (product ? product.price * qty : 0);
  }, 0);

  return (
    <div style={{ background: '#f8f8f8', borderRadius: 12, padding: 24, margin: '32px auto 16px auto', maxWidth: 600 }}>
      <h2 style={{ fontSize: '1.2rem', marginBottom: 12 }}>Satın Alınanlar</h2>
      {inputSelected.length === 0 ? (
        <div style={{ color: '#888' }}>Henüz ürün seçilmedi.</div>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {inputSelected.map(([id, qty]) => {
            const product = products.find(p => p.id === Number(id));
            return product ? (
              <li key={id} style={{ marginBottom: 8, display: 'flex', justifyContent: 'space-between' }}>
                <span>{product.name} x {qty}</span>
                <span>${(product.price * qty).toLocaleString()}</span>
              </li>
            ) : null;
          })}
        </ul>
      )}
      <div style={{ borderTop: '1px solid #eee', marginTop: 12, paddingTop: 12, display: 'flex', justifyContent: 'space-between', fontWeight: 600 }}>
        <span>Toplam Harcama:</span>
        <span>${inputTotal.toLocaleString()}</span>
      </div>
      <div style={{ marginTop: 8, color: '#1ed760', fontWeight: 600 }}>Kalan Bakiye: ${balance.toLocaleString()}</div>
    </div>
  );
};

export default Summary; 