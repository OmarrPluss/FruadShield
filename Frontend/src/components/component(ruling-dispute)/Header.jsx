// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-950">
      <div className="text-2xl font-bold">FraudWatch</div>
      <nav className="flex gap-6">
        <span className="cursor-pointer">Dashboard</span>
        <span className="cursor-pointer">Reports</span>
        <span className="cursor-pointer">Alerts</span>
        <span className="cursor-pointer">Analytics</span>
        <span className="cursor-pointer">Teams</span>
      </nav>
      <div className="bg-gray-800 px-3 py-1 rounded">Nagdi</div>
    </header>
  );
};

export default Header;