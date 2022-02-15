import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <main>
        <h1>Обманчиво простая и невероятно интересная игра</h1>
        <h2>Приветствуем вас в Arkanoid</h2>
      </main>
      <nav>
        <Link to="/">На главную</Link>
      </nav>
    </>
  );
}
