import React, { useState } from 'react';

const TabContainer = ({ tabs, defaultTab = 0, children }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className="mt-5">
      <div className="flex border-b border-border mb-4">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`px-5 py-2.5 cursor-pointer border-b-3 border-transparent transition-all duration-300 ${
              activeTab === index
                ? 'border-primary text-primary'
                : 'text-foreground hover:text-primary'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {React.Children.toArray(children)[activeTab]}
      </div>
    </div>
  );
};

export default TabContainer;

