import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home, Login, SignUp } from '@pages';

// Mock
import Forum from './pages/Forum';
import Leaderboard from './pages/Leaderboard';
import Game from './pages/Game';
import Error from './pages/Error';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="sign-in" element={<Login />} />
      <Route path="sign-up" element={<SignUp/>} />
      <Route path="leaderboard" element={<Leaderboard />} />
      <Route path="forum" element={<Forum />} />
      <Route path="arkanoid" element={<Game />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </Router>,
  document.getElementById('root'),
);
