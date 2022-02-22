import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>Вход</p>
      </main>
      <nav>
        <Link to="/">На главную</Link>
      </nav>
    </>
  );
}
