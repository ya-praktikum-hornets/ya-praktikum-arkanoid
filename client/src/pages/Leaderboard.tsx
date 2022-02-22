import React from 'react';
import { Link } from 'react-router-dom';

export default function Leaderboard() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>Лидерборд</p>
      </main>
      <nav>
        <Link to="/">На главную</Link>
      </nav>
    </>
  );
}
