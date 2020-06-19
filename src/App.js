/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navigation } from './components/Header';
import { Video } from './video/Video';
import { MainPage } from './pages/mainPage';
import { DayPage } from './pages/pickedDate';
import { Calendar } from './pages/calendar';
import { Context } from './context/Context'

import './App.css';


function App() {
  const context = useContext(Context);
  useEffect(() => {
    if (localStorage.length !== 0) {
      const storageDate = localStorage.getItem('date');
      const date = storageDate.split('-');
      context.dateState.years = date[0];
      context.dateState.month = date[1];
      context.dateState.days = date[2];
    }
  }, [])



  return (
    <div className="App">
      <Video />
      <Context.Provider value={context}>
        <Router>
          <Navigation />
          <Route path='/test_nasa_pic_app/' exact>
            <MainPage />
          </Route>
          <Route path='/test_nasa_pic_app/calendar'> <Calendar/></Route>
          <Route path='/test_nasa_pic_app/days'><DayPage /></Route>
        </Router>
      </Context.Provider>

    </div>
  );
}

export default App;
