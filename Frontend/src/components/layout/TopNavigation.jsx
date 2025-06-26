import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from './Logo';
import NavLinks from './NavLinks';
import UserMenu from './UserMenu';

const TopNavigation = ({ activePage, onPageChange }) => {
  // Define navigation links
  const navLinks = [
    { id: 'dashboard', icon: 'tachometer-alt', text: 'Dashboard', path: '/dashboard' },
    { id: 'market-trends', icon: 'chart-line', text: 'Market Trends' , path: '/market-trends'},
    { id: 'casses', icon: 'exclamation-triangle', text: 'Casses', path: '/casses' },
    { id: 'manage-user-data', icon: 'users', text: 'Manage User Data' , path: '/manage-user-data'},
    { id: 'model-feedback', icon: 'comment-dots', text: 'Model Feedback', path: '/model-feedback' },
    { id: 'model-managment', icon: 'robot', text: 'Model Managment' , path: '/model-managment'},
    { id: 'settings', icon: 'cog', text: 'Settings' , path: '/settings'}

  ];
  
  // Mock user data
  const user = {
    initials: 'AD',
    name: 'Admin'
  };
  
  return (
    <nav className="bg-nav-color flex justify-between items-center px-6 h-16 shadow-nav sticky top-0 z-50">
      <Logo />
      
      <NavLinks 
        links={navLinks} 
        activePage={activePage} 
        onPageChange={onPageChange} 
      />
      
      <UserMenu user={user} />
    </nav>
  );
};

export default TopNavigation;
