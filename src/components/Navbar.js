import React from 'react'

const navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 flex justify-between">
      <a className="text-white font-bold text-2xl flex items-center" href="#">
        <i className="fas fa-music mr-2"></i>
        Buzzy Beats
      </a>
      <ul className="flex items-center">
        <li className="mr-4">
          <a className="text-white hover:text-gray-400 flex items-center" href="#">
            <i className="fas fa-home mr-2"></i>
            Home
          </a>
        </li>
        <li className="mr-4">
          <a className="text-white hover:text-gray-400 flex items-center" href="#">
            <i className="fas fa-list-alt mr-2"></i>
            Features
          </a>
        </li>
        <li className="mr-4">
          <a className="text-white hover:text-gray-400 flex items-center" href="#">
            <i className="fas fa-dollar-sign mr-2"></i>
            Pricing
          </a>
        </li>
        <li>
          <a className="text-white opacity-50 cursor-not-allowed flex items-center" href="#">
            <i className="fas fa-lock mr-2"></i>
            Disabled
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default navbar