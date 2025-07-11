import React from 'react';

const suggestions = [
  {
    title: 'EARTH REVIEWS',
    img: 'https://neal.fun/link-images/earth-reviews.svg',
    url: 'https://neal.fun/earth-reviews/'
  },
  {
    title: 'The Deep Sea',
    img: 'https://neal.fun/link-images/deep-sea.svg',
    url: 'https://neal.fun/deep-sea/'
  },
  {
    title: 'The Password Game',
    img: 'https://neal.fun/link-images/password-game.svg',
    url: 'https://neal.fun/password-game/'
  },
  {
    title: 'Paper',
    img: 'https://neal.fun/link-images/paper.svg',
    url: 'https://neal.fun/paper/'
  },
];

const Footer = () => (
  <footer style={{ background: '#fff', width: '100%', maxWidth: '100vw', padding: '0 0 48px 0', marginTop: 40, textAlign: 'center' }}>
    <div style={{height: '15px'}}></div>
    <div style={{ fontSize: 24, fontWeight: 200, marginBottom: 24, marginTop: 32 }}>You may also like</div>
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr 1fr',
      gap: 28,
      maxWidth: 700,
      margin: '0 auto 36px auto',
      justifyItems: 'center',
    }}>
      {suggestions.map((s, i) => (
        <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#fff',
          borderRadius: 20,
          boxShadow: '0 2px 12px #e0e0e0',
          minHeight: 120,
          minWidth: 320,
          maxWidth: 340,
          width: '100%',
          padding: 0,
          textDecoration: 'none',
          overflow: 'hidden',
          border: '2px solid #2222',
          transition: 'box-shadow 0.2s, border 0.2s',
        }}>
          <img src={s.img} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 20 }} />
        </a>
      ))}
    </div>
    <div style={{ margin: '36px 0 18px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ fontSize: 18, marginBottom: 10, color: '#222' }}>Get new posts!</div>
      <form style={{ display: 'flex', gap: 8 }} onSubmit={e => { e.preventDefault(); alert('Abonelik özelliği demo!'); }}>
        <div style={{ display: 'flex', alignItems: 'center', background: '#fffbe6', border: '1.5px solid #222', borderRadius: 8, padding: '0 0 0 10px', minWidth: 320, height: 48 }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: 8 }}>
            <rect x="2" y="4" width="20" height="16" rx="3" fill="#fffbe6" stroke="#222" strokeWidth="1.5" />
            <path d="M3 6l9 7 9-7" stroke="#222" strokeWidth="1.5" fill="none" />
          </svg>
          <input type="email" placeholder="Your email" required style={{ border: 'none', outline: 'none', background: 'transparent', fontSize: 18, minWidth: 200, height: 44 }} />
        </div>
        <button type="submit" style={{ background: '#fffbe6', border: '1.5px solid #ddd', borderRadius: 6, fontSize: 18, fontWeight: 600, padding: '12px 22px', cursor: 'pointer', transition: 'background 0.2s, border 0.2s' }}>Subscribe</button>
      </form>
    </div>
    <div style={{ marginTop: 32, fontFamily: 'Comic Sans MS, Comic Sans, cursive', fontSize: 38, fontWeight: 400, color: '#111', textAlign: 'center', letterSpacing: 2, width: '100%', display: 'flex', justifyContent: 'center' }}>
      <span>NEAL.FUN</span>
    </div>
  </footer>
);

export default Footer; 