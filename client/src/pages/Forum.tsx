import React from 'react';
import { Link } from 'react-router-dom';

export default function Forum() {
  return (
    <>
      <main>
        <p>Форум</p>
      </main>
      <nav>
        <Link to="/">На главную</Link>
      </nav>
    </>
  );
}
