import React from 'react'
import { useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {

  useState(() => {
    Aos.init({ duration: 2000 });
  })

  return (
    <div className="container mx-auto p-12">
      <h2 className="text-5xl font-bold text-white shadow-lg hover:text-blue-300  " data-aos="fade-up">About Us</h2>
      <p className="text-2xl mt-4 text-white" data-aos="fade-up" >Buzzy Beats is a music production company that aims to provide high-quality music production services to DJs and music producers. We also offer a range of services to help DJs and music producers get the most out of their music, including mixing and mastering, beat production, and more.</p>
      <h2 className="text-5xl font-bold mt-12 text-white text-center" data-aos="fade-up">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6"data-aos="fade-up" >
        <div className="bg-url bg-center bg-cover p-6 rounded-lg shadow-lg shadow-black hover:scale-105 duration-300">
          <img src="https://www.careersinmusic.com/wp-content/uploads/2019/11/what-does-a-music-producer-do.jpg" alt="producer" className="h-fit object-cover" />
          <h3 className="text-2xl font-bold mt-2 text-white">John Doe</h3>
          <p className="text-lg mt-2 text-white">Founder</p>
        </div>
        <div className="bg-url bg-center bg-cover p-6 rounded-lg shadow-lg shadow-black hover:scale-105 duration-300">
          <img src="https://www.careersinmusic.com/wp-content/uploads/2019/11/what-does-a-music-producer-do.jpg" alt="producer" className="h-fit object-cover" />
          <h3 className="text-2xl font-bold mt-2 text-white">John Doe</h3>
          <p className="text-lg mt-2 text-white">Founder</p>
        </div>
        <div className="bg-url bg-center bg-cover p-6 rounded-lg shadow-lg shadow-black hover:scale-105 duration-300">
          <img src="https://www.careersinmusic.com/wp-content/uploads/2019/11/what-does-a-music-producer-do.jpg" alt="producer" className="h-fit object-cover" />
          <h3 className="text-2xl font-bold mt-2 text-white">John Doe</h3>
          <p className="text-lg mt-2 text-white">Founder</p>
        </div>
       
      </div>
    </div>
  )

}

export default About