import React from 'react'
import Header from '../components/header/Header';
import Message from '../components/sections/Message';

function Home() {
  return (
    <>
      <header className="bg-gray-300">
        <Header />
      </header>
      <main>
        <Message />
      </main>
    </>
  );
}

export default Home