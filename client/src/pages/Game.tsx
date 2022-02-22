import React from 'react';
import { Link } from 'react-router-dom';

export default function Game() {
  return (
    <>
      <main>
        <p>Играть тут</p>
      </main>
      <nav>
        <Link to="/">На главную</Link>
      </nav>
    </>
  );
}
