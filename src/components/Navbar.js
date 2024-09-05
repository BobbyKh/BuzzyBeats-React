import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles


const NavBar = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-in-out',
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <nav className="bg-slate-950 flex justify-between md:flex-row flex-col md:items-center md:p-2 p-4 " data-aos="fade-down">
      <Link to="/" data-aos="fade-right">
        <h1 className="text-white font-bold text-2xl md:text-3xl">BuzzyBeats</h1>
      </Link>
      <ul className="md:flex hidden flex-row justify-between items-center">
        <li className="mr-6 md:mr-10" data-aos="fade-right">
          <Link to="/" className="text-white hover:text-blue-300 flex items-center">
            <i className="fas fa-home text-base md:text-lg mr-2"></i>
          </Link>
        </li>

        <li className="mr-6 md:mr-10" data-aos="fade-right">
          <Link to="/music" className="text-white hover:text-blue-300 flex items-center">
            <i className="fas fa-music text-base md:text-lg mr-2"></i>
          </Link>
        </li>
        <li className="mr-6 md:mr-10" data-aos="fade-right">
          <Link to="/features" className="text-white hover:text-blue-300 flex items-center">
            <i className="fas fa-list-ul text-base md:text-lg mr-2"></i>
          </Link>
        </li>
        <li className="mr-6 md:mr-10" data-aos="fade-right">
          <Link to="/pricing" className="text-white hover:text-blue-300 flex items-center">
            <i className="fas fa-tags text-base md:text-lg mr-2"></i>
          </Link>
        </li>
        <li className="mr-6 md:mr-10" data-aos="fade-right">
          <Link to="/about" className="text-white hover:text-blue-300 flex items-center">
            <i className="fas fa-info-circle text-base md:text-lg mr-2"></i>
          </Link>
        </li>
        <li className="mr-6 md:mr-10" data-aos="fade-right">
          <Link to="/contact" className="text-white hover:text-blue-300 flex items-center">
            <i className="fas fa-envelope text-base md:text-lg mr-2"></i>
          </Link>
        </li>
        <li className="mr-6 md:mr-10" data-aos="fade-right">
          <Link to="/signin" className="text-white hover:text-blue-300 flex items-center">
            <i className="fas fa-search text-base md:text-lg mr-2"></i>
            <span className="hidden md:inline">Search</span>
          </Link>
        </li>
        <li className="mr-6 md:mr-10" data-aos="fade-right">
          <Link to="/signin" className="text-white hover:text-blue-300 flex items-center">
            <i className="fas fa-sign-in-alt text-base md:text-lg mr-2"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

