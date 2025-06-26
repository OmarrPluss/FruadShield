import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TabContainer = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex border-b border-divider-color mb-6">
      {tabs.map(tab => (
        <div 
          key={tab.id}
          className={`py-3 px-5 cursor-pointer font-medium relative transition-all duration-300
            ${activeTab === tab.id 
              ? 'text-primary-accent' 
              : 'text-text-muted hover:text-text-light'}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.name}
          {activeTab === tab.id && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-accent"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TabContainer;
