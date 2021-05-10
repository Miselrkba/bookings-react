import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './app.css';

import { FaCalendarAlt, FaDoorOpen, FaUsers } from 'react-icons/fa';

import Picker from './users/picker';
import Bookings from './bookings/bookings';
import Bookables from './bookables/bookables';
import User from './users/user';

const App = () => {
  return (
    <Router>
      <div className="app">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/bookings" className="btn btn-header">
                  <FaCalendarAlt />
                  <span>Bookings</span>
                </Link>
              </li>
              <li>
                <Link to="/bookables" className="btn btn-header">
                  <FaDoorOpen />
                  <span>Bookables</span>
                </Link>
              </li>
              <li>
                <Link to="/users" className="btn btn-header">
                  <FaUsers />
                  <span>Users</span>
                </Link>
              </li>
            </ul>
          </nav>
          <Picker />
        </header>
        <Routes>
          <Route path="/bookings" element={<Bookings />}></Route>
          <Route path="/bookables" element={<Bookables />}></Route>
          <Route path="/users" element={<User />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
