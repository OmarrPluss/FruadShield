import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);
  
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className={`mb-3 rounded-lg overflow-hidden bg-white bg-opacity-5 transition-all duration-300 ${isOpen ? 'active' : ''} hover:bg-opacity-10`}>
      <div 
        className="p-4 cursor-pointer flex justify-between items-center font-medium"
        onClick={toggleAccordion}
      >
        <span>{title}</span>
        <FontAwesomeIcon 
          icon="chevron-up" 
          className={`transition-transform duration-300 ${isOpen ? '' : 'transform rotate-180'}`}
        />
      </div>
      
      <div 
        className="overflow-hidden transition-all duration-300"
        style={{ 
          maxHeight: isOpen ? '500px' : '0',
          padding: isOpen ? '0 16px 16px 16px' : '0 16px'
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
