import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import StockDetailsPage from './components/StockDetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/stock/:symbol" element={<StockDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;