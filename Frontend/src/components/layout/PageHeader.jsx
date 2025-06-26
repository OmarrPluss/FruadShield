import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../ui/Button';

const PageHeader = ({ title, subtitle, actions }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-2xl font-bold text-text-light">{title}</h1>
        <p className="text-text-muted">{subtitle}</p>
      </div>
      
      <div className="flex gap-3">
        {actions && actions.map(action => (
          <Button 
            key={action.id}
            variant={action.variant}
            icon={action.icon}
            onClick={action.onClick}
          >
            {action.text}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default PageHeader;
