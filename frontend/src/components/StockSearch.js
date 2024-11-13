import React, { useState } from 'react';
import axios from 'axios';

const StockSearch = () => {
  const [symbol, setSymbol] = useState('');
  const [data, setData] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/stock/${symbol}`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching stock data:", error);
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        placeholder="Enter stock symbol"
        className="border p-2 rounded"
      />
      <button onClick={handleSearch} className="ml-2 p-2 bg-blue-500 text-white rounded">
        Search
      </button>

      {data && (
        <div className="mt-4">
          <h2>Stock Data for {symbol.toUpperCase()}:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default StockSearch;
