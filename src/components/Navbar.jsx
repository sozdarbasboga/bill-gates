import React from 'react';

const Navbar = ({ onLogoClick }) => (
  <nav className="navbar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 0', background: '#fff', borderBottom: '1px solid #eee', fontWeight: 'bold', fontSize: '2rem', letterSpacing: '2px' }}>
    <span style={{ cursor: 'pointer', color: '#1ed760' }} onClick={onLogoClick}>NEAL.FUN</span>
  </nav>
);

export default Navbar; 