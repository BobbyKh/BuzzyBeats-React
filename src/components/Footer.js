import React, { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

  useState(() => {
    AOS.init({duration: 2000});

  }

  )
  return (
    <footer className=" bg-inherit bg-black flex flex-col justify-center mt-12 " data-aos="fade-up" >
      <div className="container mx-auto flex justify-center">
        <div className="flex items-center">
          <a href="https://www.facebook.com/">
            <i className="fab fa-facebook-f text-3xl text-blue-600 mr-6" />
          </a>
          <a href="https://www.instagram.com/">
            <i className="fab fa-instagram text-3xl text-red-600 mr-6" />
          </a>
          <a href="https://www.twitter.com/">
            <i className="fab fa-twitter text-3xl text-blue-500 mr-6" />
          </a>
        </div>
      </div>
      <div className="container mx-auto flex flex-col items-center text-center mt-6">
        <p className="text-lg text-white">2022 Buzzy Beats. All rights reserved.</p>
        <p className="text-sm text-white" >1234 Some Street, City, State 12345</p>
      </div>
    </footer>

  )
}

export default Footer