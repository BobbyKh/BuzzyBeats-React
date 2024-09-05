import React from 'react'

const Features = () => {
  return (
    <div className="container mx-auto p-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-green-500 p-6 rounded-lg shadow-lg animate-pulse">
        <h3 className="text-2xl font-bold">Beat Production</h3>
        <p className="text-lg mt-2">We can produce custom beats for your tracks, tailored to your style and preferences.</p>
      </div>
      <div className="bg-green-500 p-6 rounded-lg shadow-lg animate-pulse">
        <h3 className="text-2xl font-bold">Mixing and Mastering</h3>
        <p className="text-lg mt-2">We offer professional mixing and mastering services to help you get the best possible sound.</p>
      </div>
      <div className="bg-green-500 p-6 rounded-lg shadow-lg animate-pulse">
        <h3 className="text-2xl font-bold">Recording Studio Services</h3>
        <p className="text-lg mt-2">We also offer additional services such as recording studio services.</p>
      </div>
    </div>
    
  )

}

export default Features