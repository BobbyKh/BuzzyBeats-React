import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Gallery from '../components/Gallery';

const Feed = () => {

  AOS.init({ duration: 2000 });
  
  return (
<>

    <div className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-green-500 font-bold text-center mt-12  rounded-lg px-6" data-aos="fade-down">Transforming Your Sound, 
      <p className="text-xl text-center mt-8">We're a team of music producers, sound engineers, and DJs dedicated to helping you create the best music possible. From mixing and mastering to beat production and sound design, we've got you covered.</p>
    <div className="mt-12 flex items-center justify-center" data-aos ="fade-up">
      <div className="flex justify-center">
        <button className="bg-gradient-to-r from-sky-500 to-green-500 hover:from-green-500 hover:to-sky-500 border-transparent text-white font-bold py-2 px-6 rounded-full animate-pulse ease-out duration-300">
          Explore
        </button>
      </div>
      
    </div>

    <div className="mt-12 flex justify-center" data-aos="fade-up">
      <i className="fas fa-headphones animate-pulse text-6xl text-white"></i>
    </div>

    </div>

    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 px-6 py-6 " data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-once="false">
      <div className="bg-transparent rounded-lg shadow-lg animate-spin-slow">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold text-white text-center">Mixing</h2>
          <p className="mt-4 text-xl text-white text-center">We mix and master tracks to give them a professional sound. From hip hop to pop, we've got you covered.</p>
          <img src="https://i.pinimg.com/originals/54/9a/6d/549a6d0f04261b8034caa1b6dd5a5033.jpg" alt="mixing" className="h-48 w-full object-cover mt-4 rounded-lg" />
          <button className="bg-gradient-to-r from-sky-500 to-green-500 hover:from-green-500 hover:to-sky-500 border-transparent text-white font-bold py-2 px-4 rounded-full mt-4">
            Read More
          </button>
        </div>
      </div>
      <div className="bg-transparent rounded-lg shadow-lg animate-spin-slow">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold text-white text-center">Beat Production</h2>
          <p className="mt-4 text-xl text-white text-center">We create beats for artists, producers, and DJs. From trap to ambient, we've got you covered.</p>
          <img src="https://i.pinimg.com/originals/54/9a/6d/549a6d0f04261b8034caa1b6dd5a5033.jpg" alt="beat production" className="h-48 w-full object-cover mt-4 rounded-lg" />
          <button className="bg-gradient-to-r from-sky-500 to-green-500 hover:from-green-500 hover:to-sky-500 border-transparent text-white font-bold py-2 px-4 rounded-full mt-4">
            Read More
          </button>
        </div>
      </div>
      <div className="bg-transparent rounded-lg shadow-lg animate-spin-slow">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold text-white text-center">Sound Design</h2>
          <p className="mt-4 text-xl text-white text-center">We create sounds for producers, DJs, and artists. From synths to drums, we've got you covered.</p>
          <img src="https://i.pinimg.com/originals/54/9a/6d/549a6d0f04261b8034caa1b6dd5a5033.jpg" alt="sound design" className="h-48 w-full object-cover mt-4 rounded-lg" />
          <button className="bg-gradient-to-r from-sky-500 to-green-500 hover:from-green-500 hover:to-sky-500 border-transparent text-white font-bold py-2 px-4 rounded-full mt-4">
            Read More
          </button>
        </div>
      </div>
    </div>

    <h2 className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-green-500 font-bold text-center mt-12  rounded-lg px-6">Our Artists</h2>
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 px-6 py-6 " data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <div className="bg-white rounded-lg shadow-lg hover:opacity-50 transition duration-500">
        <img src="https://i.pinimg.com/originals/54/9a/6d/549a6d0f04261b8034caa1b6dd5a5033.jpg" alt="gallery" className="h-full w-full object-cover rounded-lg" />
      </div>
      <div className="bg-white rounded-lg shadow-lg hover:opacity-50 transition duration-500 delay-200">
        <img src="https://img.freepik.com/premium-photo/image-man-sitting-front-computer-wanting-podcast-while-smiling_1234686-465.jpg?w=740" alt="gallery" className="h-full w-full object-cover rounded-lg" />
      </div>
      <div className="bg-white rounded-lg shadow-lg hover:opacity-50 transition duration-500 delay-400">
        <img src="https://img.freepik.com/free-photo/sound-engineer-editing-audio-recordings-with-daw-software-mixing-console_482257-93373.jpg?t=st=1725555946~exp=1725559546~hmac=0286627dd4ab41cacce92185c122aa3881dcc7338b060eb0cdffec7f88afb8ce&w=360" alt="gallery" className="h-full w-full object-cover rounded-lg" />
      </div>
      <div className="bg-white rounded-lg shadow-lg hover:opacity-50 transition duration-500 delay-600">
        <img src="https://img.freepik.com/free-photo/beginner-singer-trying-play-acoustic-guitar-using-online-tutorials_482257-83403.jpg?w=996&t=st=1725555988~exp=1725556588~hmac=35c07dae85788a143605a463f1169786039192df495020a4d57639ed69c56209" alt="gallery" className="h-full w-full object-cover rounded-lg" />
      </div>
    </div>
    <Gallery />

</>
    



  )
     

}

export default Feed
