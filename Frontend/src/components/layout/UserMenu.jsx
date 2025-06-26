import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UserMenu = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="flex items-center gap-3 relative">
      <div className="w-9 h-9 rounded-full bg-primary-accent flex items-center justify-center text-white font-semibold">
        {user.initials}
      </div>
      <span>{user.name}</span>
      <FontAwesomeIcon 
        icon="chevron-down" 
        className="cursor-pointer"
        onClick={toggleMenu}
      />
      
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-card-color rounded-lg shadow-lg p-2 z-50">
          <ul className="list-none m-0 p-0">
            <li className="px-4 py-2 hover:bg-highlight rounded-md cursor-pointer">Profile</li>
            <li className="px-4 py-2 hover:bg-highlight rounded-md cursor-pointer">Settings</li>
            <li className="px-4 py-2 hover:bg-highlight rounded-md cursor-pointer">Help</li>
            <li className="px-4 py-2 hover:bg-highlight rounded-md cursor-pointer text-danger-accent">Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
