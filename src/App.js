import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { loadPhotoShoots } from './utils/apiUtils';

import HomePage from './pages/HomePage/HomePage';
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
          <Router>
            <Route exact path="/" component={HomePage} />
          </Router>
          {/* <div className="page-header">
            <h1 className="page-title">About Ciara</h1>
          </div>
          <SessionInfo />
          <SignUpTable /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
