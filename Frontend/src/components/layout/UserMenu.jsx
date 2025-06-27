import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const USER_TYPES = ['admin', 'manager', 'client', 'analyst'];
const USER_TYPE_ROUTES = {
  admin: '/',
  manager: '/manager-dashboard',
  client: '/client-dashboard',
  analyst: '/analyst-dashboard',
};
const showUserTypeSwitcher = true; // Set to false to disable user type switching

const UserMenu = ({ user, onUserTypeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showUserTypeMenu, setShowUserTypeMenu] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // Open menu on right click or left click
  const handleContextMenu = (e) => {
    e.preventDefault();
    setIsOpen(true);
    setShowUserTypeMenu(false);
  };
  const handleLeftClick = (e) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
    setShowUserTypeMenu(false);
  };

  // Close menu on click outside
  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
        setShowUserTypeMenu(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClick);
    } else {
      document.removeEventListener('mousedown', handleClick);
    }
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isOpen]);

  const handleUserTypeClick = (type) => {
    setShowUserTypeMenu(false);
    setIsOpen(false);
    console.log(`Switching to user type: ${type}`);
    if (onUserTypeChange) onUserTypeChange(type); // This updates the user type in app state
    if (USER_TYPE_ROUTES[type]) navigate(USER_TYPE_ROUTES[type]);
  };

  // Open submenu on right click only for Profile
  const handleProfileContextMenu = (e) => {
    if (!showUserTypeSwitcher) return;
    e.preventDefault();
    e.stopPropagation();
    setShowUserTypeMenu(true);
  };
  // Close submenu on click outside or mouse leave
  useEffect(() => {
    if (!showUserTypeMenu) return;
    const handleClick = (e) => {
      setShowUserTypeMenu(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showUserTypeMenu]);

  return (
    <div className="flex items-center gap-3 relative select-none" ref={menuRef} onContextMenu={handleContextMenu}>
      <div className="w-9 h-9 rounded-full bg-primary-accent flex items-center justify-center text-white font-semibold cursor-pointer"
        onClick={handleLeftClick}
      >
        {user.initials}
      </div>
      <span>{user.name}</span>
      <FontAwesomeIcon 
        icon="chevron-down" 
        className="cursor-pointer"
        onClick={handleLeftClick}
      />
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-40 bg-card-color rounded-lg shadow-lg p-2 z-50" style={{right: 'auto', left: 0}}>
          <ul className="list-none m-0 p-0">
            <li
              className="px-4 py-2 hover:bg-highlight rounded-md cursor-pointer relative"
              onClick={() => setShowUserTypeMenu(true)}
            >
              Profile
              {showUserTypeSwitcher && <FontAwesomeIcon icon="chevron-left" className="ml-2 text-xs" />}
            </li>
            <li className="px-4 py-2 hover:bg-highlight rounded-md cursor-pointer">Settings</li>
            <li className="px-4 py-2 hover:bg-highlight rounded-md cursor-pointer">Help</li>
            <li className="px-4 py-2 hover:bg-highlight rounded-md cursor-pointer text-danger-accent">Logout</li>
          </ul>
        </div>
      )}
      {showUserTypeSwitcher && showUserTypeMenu && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
          <div className="bg-card-color rounded-lg shadow-2xl p-6 w-72 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4 text-center">Switch User</h3>
            <ul className="w-full">
              {USER_TYPES.map(type => (
                <li key={type} className="px-4 py-3 mb-2 hover:bg-highlight rounded-md cursor-pointer text-center"
                    onClick={e => { e.stopPropagation(); handleUserTypeClick(type); }}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </li>
              ))}
            </ul>
            <button className="mt-2 text-sm text-[#FF5E7D] hover:underline" onClick={() => setShowUserTypeMenu(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
