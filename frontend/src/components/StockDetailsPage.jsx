import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const StockDetailsPage = () => {
  const { symbol } = useParams();
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStockData = async () => {
      console.log('Fetching data for symbol:', symbol);
      try {
        const response = await axios.get(`/api/stock/${symbol}`);
        console.log('API response:', response.data);
        setStockData(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching stock data:', err);
        setError('Failed to fetch stock data');
        setLoading(false);
      }
    };

    fetchStockData();
  }, [symbol]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-4xl font-bold mb-4">{symbol}</h1>
      {stockData && (
        <div className="text-center">
          <pre>{JSON.stringify(stockData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default StockDetailsPage;