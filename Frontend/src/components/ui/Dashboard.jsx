import React, { useState } from 'react';

const Dashboard = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5">
      {children}
    </div>
  );
};

export default Dashboard;
