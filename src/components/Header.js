import React from 'react'
import { NavLink } from 'react-router-dom';
import './index.scss';

export const Navigation = () => {
  function refreshPage() {
    window.location.reload(false);
  }

    return (
        <nav className="nav-wrapper">
            <span className="nav_title">Astronomy Picture of the Day</span>
            <ul id="nav-mobile" className="nav_list">
                <li><NavLink to='/test_nasa_pic_app/calendar' onClick={() => {
                   refreshPage()
                }}>Calendar</NavLink></li>
                <li><NavLink to="/test_nasa_pic_app/">Home</NavLink></li>
            </ul>
        </nav>
    )
}

