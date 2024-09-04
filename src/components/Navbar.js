import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 flex justify-between md:flex-row flex-col md:items-center md:p-2 p-4">
      <Link to="/">
        <h1 className="text-white font-bold text-2xl md:text-3xl">BuzzyBeats</h1>
      </Link>
      <ul className="md:flex hidden flex-row justify-between items-center">
        <li className="mr-6 md:mr-10">
          <Link to="/" className="text-white hover:text-blue-300 flex items-center">
            <i className="fas fa-home text-base md:text-lg mr-2"></i>
            <span className="text-base md:text-lg">Home</span>
          </Link>
        </li>

        <li className="mr-6 md:mr-10">
          <Link to="/music" className="text-white hover:text-blue-300 flex items-center">
            <i className="fas fa-music text-base md:text-lg mr-2"></i>
            <span className="text-base md:text-lg">Music</span>
          </Link>
        </li>
        <li className="mr-6 md:mr-10">
          <Link to="/features" className="text-white hover:text-blue-300 flex items-center">
            <i className="fas fa-list-ul text-base md:text-lg mr-2"></i>
            <span className="text-base md:text-lg">Features</span>
          </Link>
        </li>
        <li className="mr-6 md:mr-10">
          <Link to="/pricing" className="text-white hover:text-blue-300 flex items-center">
            <i className="fas fa-tags text-base md:text-lg mr-2"></i>
            <span className="text-base md:text-lg">Pricing</span>
          </Link>
        </li>

        <li className="mr-6 md:mr-10">
          <Link to="/about" className="text-white hover:text-blue-300 flex items-center">
            <i className="fab fa-info-circle text-base md:text-lg mr-2"></i>
            <span className="text-base md:text-lg">About</span>
          </Link>
        </li>
        <li className="mr-6 md:mr-10">
          <Link to="/contact" className="text-white hover:text-blue-300 flex items-center">
            <i className="fab fa-envelope text-base md:text-lg mr-2"></i>
            <span className="text-base md:text-lg">Contact</span>
          </Link>
        </li>
      </ul>
      <div className="md:hidden flex flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          <Link to="/">
            <i className="fas fa-home text-base text-white mr-2"></i>
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <Link to="/music">
            <i className="fas fa-music text-base text-white mr-2"></i>
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <Link to="/features">
            <i className="fas fa-list-ul text-base text-white mr-2"></i>
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <Link to="/pricing">
            <i className="fas fa-tags text-base text-white mr-2"></i>
          </Link>
        </div>

        <div className="flex justify-center items-center">
          <Link to="/about">
            <i className="fab fa-info-circle text-base text-white mr-2"></i>
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <Link to="/contact">
            <i className="fab fa-envelope text-base text-white mr-2"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

