import React from 'react'

const About = () => {
  return (
    <div className="container mx-auto p-12">
      <h2 className="text-5xl font-bold">About Us</h2>
      <p className="text-2xl mt-4">Buzzy Beats is a music production company that aims to provide high-quality music production services to DJs and music producers. We also offer a range of services to help DJs and music producers get the most out of their music, including mixing and mastering, beat production, and more.</p>
      <h2 className="text-5xl font-bold mt-12">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="https://source.unsplash.com/200x200/?music,producer" alt="producer" className="w-full h-32 object-cover" />
          <h3 className="text-2xl font-bold mt-2">John Doe</h3>
          <p className="text-lg mt-2">Founder</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="https://source.unsplash.com/200x200/?music,dj" alt="dj" className="w-full h-32 object-cover" />
          <h3 className="text-2xl font-bold mt-2">Jane Doe</h3>
          <p className="text-lg mt-2">DJ and Sound Engineer</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="https://source.unsplash.com/200x200/?music,beatmaker" alt="beatmaker" className="w-full h-32 object-cover" />
          <h3 className="text-2xl font-bold mt-2">Bob Smith</h3>
          <p className="text-lg mt-2">Beatmaker</p>
        </div>
      </div>
    </div>
  )

}

export default About