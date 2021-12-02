import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Login from '../pages/auth/Login/Login';
import Register from '../pages/auth/Register/Register';
import PasswordReset from '../pages/auth/PasswordReset/PasswordReset';
import Route1 from '../pages/protected/Route1/Route1';
import SubRoute1 from '../pages/protected/Route1/SubRoute1/SubRoute1';
import NotFound from '../pages/NotFound/NotFound';

import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/reset-password">Reset Password</Link>
        </li>
        <li>
          <Link to="/route1">Route1</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<PasswordReset />} />
        <Route path="route1" element={<Route1 />}>
          <Route path="subroute1" element={<SubRoute1 />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
