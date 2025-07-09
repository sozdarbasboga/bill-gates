import React from 'react';

const BillGatesHeader = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '32px auto 0 auto', background: '#fff', padding: '48px 0 40px 0', boxShadow: '0 2px 16px #e0e0e0', maxWidth: 1030 }}>
    <img src="/spend/billgates.jpg" alt="Bill Gates" style={{ width: 120, height: 120, borderRadius: '50%', border: '1px solid #eee', marginBottom: 16 }} />
    <h1 style={{ fontSize: '2.2rem', fontWeight: 700, margin: 0 }}>Spend Bill Gates' Money</h1>
  </div>
);

export default BillGatesHeader; 