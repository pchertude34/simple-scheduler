import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LeftNav from './components/LeftNav/LeftNav';
import SessionInfo from './components/SessionInfo/SessionInfo';
import SignUpTable from './components/SignUpTable/SignUpTable';

import './App.scss';

function App() {
  return (
    <div className="app-container">
      <div className="app-content">
        <LeftNav />
        <div className="app-body">
          <div className="page-header">
            <h1 className="page-title">About Ciara</h1>
          </div>
          <SessionInfo />
          <SignUpTable />
        </div>
      </div>
    </div>
  );
}

export default App;
