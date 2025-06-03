// src/components/LocationInsights.jsx
import React from 'react';

const LocationInsights = ({ selectedUser }) => {
  return (
    <section className="bg-gray-800 p-5 rounded">
      <h3 className="text-lg mb-4">Location Insights</h3>
      <p><strong>Primary Location:</strong> {selectedUser.primaryLocation}</p>
      <p>{selectedUser.locationPercentage}</p>
      <div className="h-40 bg-gray-900 flex items-center justify-center rounded mt-3">Map of San Francisco</div>
    </section>
  );
};

export default LocationInsights;