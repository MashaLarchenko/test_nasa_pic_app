import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navigation } from './components/Header';
import { Video } from './video/Video';
import { MainPage } from './pages/mainPage';
import { Calendar } from './pages/calendar';
import { Context } from './context/Context'

import './App.css';


function App() {
  return (
    <div className="App">
      <Video />
      <Context.Provider value={{ category: 'years', count: 1 }}>
        <Router>
          <Navigation />
          <Route path='/' exact>
            <MainPage />
          </Route>
          <Route path='/calendar'> <h2><Calendar /></h2></Route>

        </Router>
      </Context.Provider>

    </div>
  );
}

export default App;
