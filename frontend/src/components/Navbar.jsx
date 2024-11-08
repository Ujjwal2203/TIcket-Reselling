// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">Ticket Booking</h1>
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-white hover:underline">Home</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;