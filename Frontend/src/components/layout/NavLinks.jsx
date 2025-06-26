import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavLinks = ({ links, activePage, onPageChange }) => {
  return (
    <ul className="flex list-none m-0 p-0 h-full">
      {links.map(link => (
        <li key={link.id} className="flex items-center h-full">
          <NavLink
            to={link.path}
            className={`flex items-center px-4 cursor-pointer relative h-full transition-all duration-300 font-medium
            ${activePage === link.id ? 'bg-primary-accent bg-opacity-20 border-b-3 border-primary-accent' : 'hover:bg-primary-accent hover:bg-opacity-10'}`}
            onClick={() => onPageChange(link.id)}
            end={link.path === '/'}
          >
            <FontAwesomeIcon 
              icon={link.icon} 
              className="mr-2 text-base" 
            />
            <span>{link.text}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;