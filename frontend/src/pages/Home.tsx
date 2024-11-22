import React from 'react';
import { Header } from '../components/Headers';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black overflow-hidden">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
      </main>
      <footer className="w-full py-6 bg-gray-900 text-gray-400">
        <div className="container px-4 md:px-6 text-center mx-auto">
          © 2023 BlogMaster. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;