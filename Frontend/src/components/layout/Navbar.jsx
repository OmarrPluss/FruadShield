import React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import UserMenu from './UserMenu';

const Navbar = () => {
  return (
    <nav className="bg-navbar px-6 py-3 flex justify-between items-center shadow-lg sticky top-0 z-40">
      <div className="flex items-center gap-6">
        <Logo />
        <NavLinks />
      </div>
      <UserMenu />
    </nav>
  );
};

export default Navbar;

