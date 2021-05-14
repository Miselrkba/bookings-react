import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './app.css';

import { FaCalendarAlt, FaDoorOpen, FaUsers } from 'react-icons/fa';

import Picker from './users/picker';
import BookingsPage from './bookings/bookingsPage';
import Bookables from './bookables/bookables';
import User from './users/user';
import UsertContext from './users/userContext';

const App = () => {
  const [user, setUser] = useState();
  return (
    <UsertContext.Provider value={user}>
      <Router>
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
          <Picker user={user} setUser={setUser} />
        </header>
        <Routes>
          <Route path="/bookings" element={<BookingsPage />}></Route>
          <Route path="/bookables" element={<Bookables />}></Route>
          <Route path="/users" element={<User />}></Route>
        </Routes>
      </Router>
    </UsertContext.Provider>
  );
};

export default App;
