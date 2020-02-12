import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import './App.scss';

function App() {
  return (
    <div className="app-container">
      <div className="app-content">
        <Header />
        <Router></Router>
      </div>
    </div>
  );
}

export default App;
