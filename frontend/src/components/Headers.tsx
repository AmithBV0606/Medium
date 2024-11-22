import React from 'react';
import { Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-gray-200 px-4 lg:px-6 h-16 flex items-center">
      <div className="font-bold text-4xl">
        Scribe
      </div>

      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
        <Link
          to={"https://github.com/AmithBV0606/Medium"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-200 border border-gray-200 px-4 py-2 rounded hover:bg-gray-600 flex items-center bg-[#111827]"
        >
          <Github className="w-5 h-5 mr-2" />
          View on GitHub
        </Link>

        <Link
          to={"/signin"}
          className="text-gray-200 border border-gray-200 px-4 py-2 rounded hover:bg-gray-600 bg-[#111827]"
        >
          Sign In
        </Link>

        <Link
          to={"/signup"}
          className="bg-gray-200 text-black border-4 border-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-2 rounded hover:bg-gray-300"
        >
          Sign Up
        </Link>
      </nav>
    </header>
  );
};