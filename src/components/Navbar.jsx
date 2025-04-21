import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">ReeCreate</h1>
      <ul className="flex gap-4 text-gray-600">
        <li className="hover:text-blue-500">Home</li>
        <li className="hover:text-blue-500">About</li>
        <li className="hover:text-blue-500">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
