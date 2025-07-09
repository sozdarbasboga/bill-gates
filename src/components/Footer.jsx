import React from 'react';

const Footer = () => (
  <footer style={{ background: '#fff', borderTop: '1px solid #eee', padding: '32px 0 24px 0', marginTop: 40, textAlign: 'center' }}>
    <div style={{ maxWidth: 500, margin: '0 auto', background: '#f8f8f8', borderRadius: 12, padding: 24, marginBottom: 16 }}>
      <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Fikir/Öneri Kutusu</h3>
      <p style={{ color: '#888', fontSize: 15 }}>Uygulama ile ilgili öneri veya hata bildirimi için bana ulaşabilirsin.</p>
      <a href="mailto:seninmailin@ornek.com" style={{ color: '#1ed760', textDecoration: 'underline', fontWeight: 600 }}>E-posta Gönder</a>
    </div>
    <form style={{ marginTop: 16 }} onSubmit={e => { e.preventDefault(); alert('Abonelik özelliği demo!'); }}>
      <input type="email" placeholder="E-posta adresin" required style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid #ccc', marginRight: 8 }} />
      <button type="submit" style={{ background: '#1ed760', color: '#fff', border: 'none', borderRadius: 6, padding: '8px 18px', fontWeight: 600, cursor: 'pointer' }}>Abone Ol</button>
    </form>
    <div style={{ color: '#aaa', fontSize: 13, marginTop: 18 }}>Bu site <a href="https://neal.fun/spend/" target="_blank" rel="noopener noreferrer" style={{ color: '#1ed760' }}>neal.fun/spend</a> klonudur.</div>
  </footer>
);

export default Footer; 