import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DateRangePicker = ({ onChange }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  
  const handleApply = () => {
    if (startDate && endDate) {
      onChange({ startDate, endDate });
      setIsOpen(false);
    }
  };
  
  const formatDateForDisplay = (start, end) => {
    if (!start || !end) return 'Select Date Range';
    
    const formatDate = (dateStr) => {
      const date = new Date(dateStr);
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    };
    
    return `${formatDate(start)} - ${formatDate(end)}`;
  };
  
  const handlePresetRange = (days) => {
    const end = new Date();
    const start = new Date();
    start.setDate(start.getDate() - days);
    
    const formatDateForInput = (date) => {
      return date.toISOString().split('T')[0];
    };
    
    setStartDate(formatDateForInput(start));
    setEndDate(formatDateForInput(end));
  };
  
  return (
    <div className="relative">
      <button 
        className="bg-white bg-opacity-5 border border-divider-color text-text-light py-2 px-3 rounded-md flex items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon="calendar-alt" />
        <span>{formatDateForDisplay(startDate, endDate)}</span>
      </button>
      
      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-card-color border border-divider-color rounded-md shadow-lg p-4 z-10 w-72">
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <button 
                className="text-xs text-primary-accent hover:underline"
                onClick={() => handlePresetRange(7)}
              >
                Last 7 days
              </button>
              <button 
                className="text-xs text-primary-accent hover:underline"
                onClick={() => handlePresetRange(30)}
              >
                Last 30 days
              </button>
              <button 
                className="text-xs text-primary-accent hover:underline"
                onClick={() => handlePresetRange(90)}
              >
                Last 90 days
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-xs text-text-muted mb-1">Start Date</label>
                <input 
                  type="date" 
                  className="w-full bg-white bg-opacity-5 border border-divider-color text-text-light py-1 px-2 rounded-md"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-xs text-text-muted mb-1">End Date</label>
                <input 
                  type="date" 
                  className="w-full bg-white bg-opacity-5 border border-divider-color text-text-light py-1 px-2 rounded-md"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
            </div>
          </div>
          
          <div className="flex justify-end gap-2">
            <button 
              className="text-sm text-text-muted hover:text-text-light"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
            <button 
              className="bg-primary-accent text-white text-sm py-1 px-3 rounded-md hover:bg-opacity-90"
              onClick={handleApply}
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;
