// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnalysisSystem from './page/AnalysisSystem';
import MainPage from './page/MainPage';
import DetectionPage from './page/DetectionPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/analysis-system" element={<AnalysisSystem />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/detection" element={<DetectionPage />} />
      </Routes>
    </Router>
  );
};

export default App;
