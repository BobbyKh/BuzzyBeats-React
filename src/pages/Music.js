import React from 'react'

const Music = () => {
  return (

    <div className="container mx-auto p-12">
    <h2 className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-green-500 font-bold text-center mt-12  rounded-lg px-6">Listen </h2>
    <p className="text-2xl mt-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-green-500">We offer a wide range of music services, including mixing and mastering, beat production, and sound design.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-gradient-to-r from-sky-500 to-green-500 p-6 rounded-lg shadow-lg">
          <iframe src="https://open.spotify.com/embed/playlist/37i9dQZEVXbMDoHDwVN2tF" width="100%" height="280" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          <h3 className="text-2xl font-bold mt-2">Mixing and Mastering</h3>
          <p className="text-lg mt-2">We offer professional mixing and mastering services to help you get the best possible sound.</p>
        </div>
        <div className="bg-gradient-to-r from-sky-500 to-green-500 p-6 rounded-lg shadow-lg">
          <iframe src="https://open.spotify.com/embed/playlist/37i9dQZEVXbLZ52XQm80Jl" width="100%" height="280" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          <h3 className="text-2xl font-bold mt-2">Beat Production</h3>
          <p className="text-lg mt-2">We can produce custom beats for your tracks, tailored to your style and preferences.</p>
        </div>
        <div className="bg-gradient-to-r from-sky-500 to-green-500 p-6 rounded-lg shadow-lg">
          <iframe src="https://open.spotify.com/embed/playlist/37i9dQZEVXbL8DVvRfATkf" width="100%" height="280" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          <h3 className="text-2xl font-bold mt-2">Sound Design</h3>
          <p className="text-lg mt-2">We can create custom sound effects and FX for your tracks, including drums, percussion, and more.</p>
        </div>
      </div>
    </div>
)
}

export default Music