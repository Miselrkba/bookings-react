import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import './app.css';

import { FaCalendarAlt, FaDoorOpen, FaUsers } from 'react-icons/fa';

import { UserProvider } from './users/userContext';
import UserPicker from './users/userPicker';
import PageSpinner from './ui/pageSpinner';

const BookablesPage = lazy(() => import('./bookables/bookablesPage'));
const BookingsPage = lazy(() => import('./bookings/bookingsPage'));
const UsersPage = lazy(() => import('./users/usersPage'));

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Router>
          <div className="App">
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

              <UserPicker />
            </header>

            <Suspense fallback={<PageSpinner />}>
              <Routes>
                <Route path="/bookings" element={<BookingsPage />} />
                <Route path="/bookables/*" element={<BookablesPage />} />
                <Route path="/users" element={<UsersPage />} />
              </Routes>
            </Suspense>
          </div>
        </Router>
      </UserProvider>
    </QueryClientProvider>
  );
};

export default App;
