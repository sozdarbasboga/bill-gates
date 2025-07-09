import React from 'react';

const Navbar = ({ onLogoClick }) => (
  <nav className="navbar" style={{ display: 'flex', alignItems: 'center', padding: '20px 0', background: '#fff', borderBottom: '1px solid #eee', fontWeight: 'bold', fontSize: '2rem', letterSpacing: '2px', justifyContent: 'flex-start' }}>
    <span
      style={{
        cursor: 'pointer',
        color: '#111',
        fontFamily: 'Comic Sans MS, Comic Sans, cursive',
        fontSize: 38,
        fontWeight: 400,
        marginLeft: 220,
        letterSpacing: 2,
        userSelect: 'none',
      }}
      onClick={onLogoClick}
    >
      NEAL.FUN
    </span>
  </nav>
);

export default Navbar; 