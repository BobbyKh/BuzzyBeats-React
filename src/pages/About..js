import React from 'react'
import { useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {

  useState(() => {
    Aos.init({ duration: 2000 });
  })

  const [teams, setTeams] = useState([])

  useState(() => {
    fetch('http://127.0.0.1:8000/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
  }, [])

  return (
    <div className="container mx-auto p-12">
      <div className="flex justify-center" data-aos="fade-up">
        <img src="https://www.audiomentor.com/wp-content/uploads/2017/01/the-ultimate-guide-to-buying-micropone-for-recording-studio-1024x640.jpg" alt="about us" className="w-full h-96 object-cover rounded-lg shadow-lg "/>
      </div>
      <h2 className="text-5xl font-bold mt-12 text-green-400 text-center" data-aos="fade-up">About Us</h2>
      <p className="text-2xl mt-4 text-white" data-aos="fade-up" >Buzzy Beats is a music production company that aims to provide high-quality music production services to DJs and music producers. We also offer a range of services to help DJs and music producers get the most out of their music, including mixing and mastering, beat production, and more.</p>
      <h2 className="text-5xl font-bold mt-12 text-green-400 text-center" data-aos="fade-up">Our Team</h2>

        
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6"data-aos="fade-up" >
      {teams.map((team) => (

        <div className="bg-url bg-center bg-cover h-full w-full p-6 rounded-lg shadow-lg shadow-black group hover:scale-105 transition duration-300 ease-in-out" data-aos="flip-left" data-aos-duration="1500">
          <img src={team.image} alt="producer" className="h-full w-full object-cover transition duration-300 ease-in-out group-hover:filter group-hover:brightness-110" />
          <h3 className="text-2xl font-bold mt-2 text-white">{team.name}</h3>
          <p className="text-lg mt-2 text-white">{team.position}</p>
        </div>
      ))}
       
      </div>
    </div>
  )

}

export default About