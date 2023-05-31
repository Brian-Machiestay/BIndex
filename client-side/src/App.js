import React from 'react';
import './App.css';
import Header from './components/header.jsx';
import Midsection from './components/Midsection';
import HealthTips from './components/healthTips';

function App() {
    return (
      <>
        <Header />
        <Midsection />
        <HealthTips />
      </>
  );
}

export default App;
