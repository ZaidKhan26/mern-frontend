import React from 'react';
import { Link } from "react-router-dom";

const Header = () => (
  <nav className="bg-blue-600 p-4 text-white flex gap-4">
    <Link to="/" className="hover:underline">Home</Link>
    <Link to="/applicants" className="hover:underline">View Applicants</Link>
  </nav>
);

export default Header;
