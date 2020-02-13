import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LeftNav from './components/LeftNav/LeftNav';
import SessionInfo from './components/SessionInfo/SessionInfo';

import './App.scss';

function App() {
  return (
    <div className="app-container">
      <div className="app-content">
        <LeftNav />
        <div className="app-body">
          <h1 className="page-title">About Ciara</h1>
          <SessionInfo />
        </div>
      </div>
    </div>
  );
}

export default App;
