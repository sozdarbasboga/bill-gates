import React from 'react';

const GamesModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.35)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: '#fff', borderRadius: 16, padding: 32, minWidth: 320, maxWidth: 500, boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }}>
        <h2 style={{ marginTop: 0 }}>Diğer Neal.Fun Oyunları</h2>
        <p style={{ color: '#888' }}>Buraya modal içeriği (oyun kartları) eklenebilir.</p>
        <button onClick={onClose} style={{ marginTop: 24, background: '#1ed760', color: '#fff', border: 'none', borderRadius: 6, padding: '8px 18px', fontWeight: 600, cursor: 'pointer' }}>Kapat</button>
      </div>
    </div>
  );
};

export default GamesModal; 