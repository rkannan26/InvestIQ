import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StockSearch = () => {
  const [symbol, setSymbol] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (symbol.trim()) {
      navigate(`/stock/${symbol.toUpperCase()}`);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="relative mt-20 z-20">
      <input
        type="text"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Search for stocks..."
        className="px-4 py-2 w-80 rounded-full border-2 border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <button 
        onClick={handleSearch}
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-full"
      >
        Search
      </button>
    </div>
  );
};

export default StockSearch;