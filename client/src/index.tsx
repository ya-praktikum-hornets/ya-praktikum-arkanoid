import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Forum from './pages/Forum';
import Home from './pages/Home';
import Leaderboard from './pages/Leaderboard';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Game from './pages/Game';
import Error from './pages/Error';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="sign-in" element={<Login />} />
      <Route path="leaderboard" element={<Leaderboard />} />
      <Route path="forum" element={<Forum />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="arkanoid" element={<Game />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </Router>,
  document.getElementById('root'),
);
