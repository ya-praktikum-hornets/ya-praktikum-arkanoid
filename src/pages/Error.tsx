import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <>
      <main>
        <p>Страница не найдена</p>
      </main>
      <nav>
        <Link to="/">На главную</Link>
      </nav>
    </>
  );
}
