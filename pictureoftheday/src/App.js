import React from 'react';
import { Navigation } from './components/Header';
import { Video } from './video/Video'
import { MainPage } from './pages/mainPage'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Video />
      <Router>
        <Navigation />
        <Route path='/' exact>
          <MainPage />
        </Route>
        <Route path='/calendar'> <h2>Calendar</h2></Route>

      </Router>
    </div>
  );
}

export default App;
