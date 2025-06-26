import React from 'react';

const DataTableContainer = ({ title, actions, maxHeight, children }) => {
  return (
    <div className="mt-4">
      {(title || actions) && (
        <div className="flex justify-between items-center mb-2">
          {title && <div className="text-sm text-text-muted">{title}</div>}
          {actions && (
            <div className="flex gap-2">
              {actions.map((action, index) => (
                <button 
                  key={index}
                  className="bg-transparent border-none text-text-muted cursor-pointer w-6 h-6 flex items-center justify-center rounded hover:bg-white hover:bg-opacity-10 hover:text-text-light transition-all duration-200"
                  onClick={action.onClick}
                >
                  <i className={`fas fa-${action.icon}`}></i>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
      
      <div className={maxHeight ? `max-h-${maxHeight} overflow-y-auto` : ''}>
        {children}
      </div>
    </div>
  );
};

export default DataTableContainer;
