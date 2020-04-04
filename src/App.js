import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import LeftNav from './components/LeftNav/LeftNav';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import AdminHome from './pages/AdminHome/AdminHome';

import './App.scss';

function App() {
  return (
    <div className="app-container">
      <div className="app-content">
        <LeftNav />
        <div className="app-body">
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/admin" component={AdminHome} />
              <Route path="/:sessionId" component={SignUpPage} />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
