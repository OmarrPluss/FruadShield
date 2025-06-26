import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Logo = () => {
  return (
    <div className="flex items-center text-xl font-bold text-white tracking-wide">
      <FontAwesomeIcon 
        icon="shield-alt" 
        className="mr-3 text-primary-accent text-2xl" 
      />
      <span>FraudWatch</span>
    </div>
  );
};

export default Logo;
