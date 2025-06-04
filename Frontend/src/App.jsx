// frontend/src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // <--- Make sure this file exists!

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setError(null);
    if (!searchTerm.trim()) {
      setError('Please enter a search term');
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/search', {
        query: searchTerm
      });
      setResults(response.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to search');
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Supabase Search</h1>

      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          placeholder="Enter search term..."
        />
        <button onClick={handleSearch} disabled={isLoading}>
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {error && <div className="error">{error}</div>}

      <div className="results">
        {isLoading ? (
          <div className="loading">Loading...</div>
        ) : results.length > 0 ? (
          results.map((item) => (
            <div key={item.id} className="result-item">
              <h3>{item.name}</h3>
              {item.description && <p>{item.description}</p>}
              {item.price && <p>Price: ${item.price}</p>}
            </div>
          ))
        ) : (
          !error && <p>No results found</p>
        )}
      </div>
    </div>
  );
}

export default App; // <--- THIS LINE IS CRUCIAL!