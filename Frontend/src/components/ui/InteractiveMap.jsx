import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faExpand, faCompress, faLayerGroup, faSearch } from '@fortawesome/free-solid-svg-icons';

const InteractiveMap = ({ 
  locations = [], 
  height = '300px', 
  showControls = true, 
  showSearch = false,
  className = '',
  onLocationClick = null 
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [mapView, setMapView] = useState('street'); // street, satellite, hybrid
  const [searchTerm, setSearchTerm] = useState('');
  const [zoom, setZoom] = useState(10);

  // Sample locations if none provided
  const defaultLocations = [
    { id: 1, name: 'San Francisco, CA', lat: 37.7749, lng: -122.4194, type: 'transaction', risk: 'low' },
    { id: 2, name: 'New York, NY', lat: 40.7128, lng: -74.0060, type: 'user', risk: 'medium' },
    { id: 3, name: 'Chicago, IL', lat: 41.8781, lng: -87.6298, type: 'merchant', risk: 'high' }
  ];

  const mapLocations = locations.length > 0 ? locations : defaultLocations;

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    if (onLocationClick) {
      onLocationClick(location);
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'high': return '#ef4444';
      case 'medium': return '#f59e0b';
      case 'low': return '#10b981';
      default: return '#6366f1';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'transaction': return 'fa-credit-card';
      case 'user': return 'fa-user';
      case 'merchant': return 'fa-store';
      default: return 'fa-map-marker-alt';
    }
  };

  const filteredLocations = mapLocations.filter(location =>
    location.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-black/90 p-4' : ''} ${className}`}>
      <div 
        className={`relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 ${
          isFullscreen ? 'h-full' : ''
        }`}
        style={{ height: isFullscreen ? '100%' : height }}
      >
        {/* Map Controls */}
        {showControls && (
          <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
            <button
              onClick={toggleFullscreen}
              className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
            >
              <FontAwesomeIcon icon={isFullscreen ? faCompress : faExpand} className="text-gray-600 dark:text-gray-300" />
            </button>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <button
                onClick={() => setMapView('street')}
                className={`block w-full px-3 py-2 text-sm text-left hover:bg-gray-50 dark:hover:bg-gray-700 ${
                  mapView === 'street' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                Street
              </button>
              <button
                onClick={() => setMapView('satellite')}
                className={`block w-full px-3 py-2 text-sm text-left hover:bg-gray-50 dark:hover:bg-gray-700 ${
                  mapView === 'satellite' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                Satellite
              </button>
              <button
                onClick={() => setMapView('hybrid')}
                className={`block w-full px-3 py-2 text-sm text-left hover:bg-gray-50 dark:hover:bg-gray-700 ${
                  mapView === 'hybrid' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                Hybrid
              </button>
            </div>
          </div>
        )}

        {/* Search Bar */}
        {showSearch && (
          <div className="absolute top-4 left-4 z-10">
            <div className="relative">
              <input
                type="text"
                placeholder="Search locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <FontAwesomeIcon 
                icon={faSearch} 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
              />
            </div>
          </div>
        )}

        {/* Zoom Controls */}
        <div className="absolute bottom-4 right-4 z-10 flex flex-col gap-1">
          <button
            onClick={() => setZoom(Math.min(zoom + 1, 18))}
            className="bg-white dark:bg-gray-800 w-8 h-8 rounded shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center text-gray-600 dark:text-gray-300 font-bold"
          >
            +
          </button>
          <button
            onClick={() => setZoom(Math.max(zoom - 1, 1))}
            className="bg-white dark:bg-gray-800 w-8 h-8 rounded shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center text-gray-600 dark:text-gray-300 font-bold"
          >
            −
          </button>
        </div>

        {/* Map Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-green-50 to-blue-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900">
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-12 grid-rows-8 h-full">
              {Array.from({ length: 96 }).map((_, i) => (
                <div key={i} className="border border-gray-300 dark:border-gray-600"></div>
              ))}
            </div>
          </div>
          
          {/* Simulated Map Features */}
          <svg className="absolute inset-0 w-full h-full">
            {/* Roads */}
            <path
              d="M0,50 Q150,80 300,60 T600,70"
              stroke="#94a3b8"
              strokeWidth="3"
              fill="none"
              className="opacity-60"
            />
            <path
              d="M100,0 Q120,150 140,300"
              stroke="#94a3b8"
              strokeWidth="2"
              fill="none"
              className="opacity-60"
            />
            
            {/* Water bodies */}
            <ellipse
              cx="450"
              cy="200"
              rx="80"
              ry="40"
              fill="#3b82f6"
              className="opacity-30"
            />
          </svg>
        </div>

        {/* Location Markers */}
        {filteredLocations.map((location, index) => (
          <div
            key={location.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            style={{
              left: `${20 + (index * 25) % 60}%`,
              top: `${30 + (index * 20) % 40}%`,
            }}
            onClick={() => handleLocationClick(location)}
          >
            {/* Marker */}
            <div
              className="relative flex items-center justify-center w-8 h-8 rounded-full shadow-lg transform transition-transform group-hover:scale-110"
              style={{ backgroundColor: getRiskColor(location.risk) }}
            >
              <FontAwesomeIcon 
                icon={faMapMarkerAlt} 
                className="text-white text-sm" 
              />
            </div>
            
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="bg-black text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                {location.name}
                <div className="text-xs opacity-75 capitalize">{location.type} • {location.risk} risk</div>
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></div>
            </div>
          </div>
        ))}

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 text-xs">
          <div className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Risk Levels</div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span className="text-gray-600 dark:text-gray-300">High Risk</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <span className="text-gray-600 dark:text-gray-300">Medium Risk</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-gray-600 dark:text-gray-300">Low Risk</span>
            </div>
          </div>
        </div>

        {/* Selected Location Info */}
        {selectedLocation && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 max-w-sm">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">{selectedLocation.name}</h3>
              <button
                onClick={() => setSelectedLocation(null)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                ×
              </button>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              <div>Type: <span className="capitalize">{selectedLocation.type}</span></div>
              <div>Risk Level: <span className="capitalize" style={{ color: getRiskColor(selectedLocation.risk) }}>{selectedLocation.risk}</span></div>
              {selectedLocation.lat && selectedLocation.lng && (
                <div>Coordinates: {selectedLocation.lat.toFixed(4)}, {selectedLocation.lng.toFixed(4)}</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveMap;

