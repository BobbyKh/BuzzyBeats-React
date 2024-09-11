import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Gallery from "../components/Gallery";
import { Link } from "react-router-dom";

const Feed = ({ services, artists }) => {
  AOS.init({ duration: 2000 });

  return (
    <>
      <div
        className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-green-500 font-bold text-center mt-12  rounded-lg px-6"
        data-aos="fade-down"
      >
        Transforming Your Sound,
        <p className="text-xl text-center mt-8">
          We're a team of music producers, sound engineers, and DJs dedicated to
          helping you create the best music possible. From mixing and mastering
          to beat production and sound design, we've got you covered.
        </p>
        <div
          className="mt-12 flex items-center justify-center"
          data-aos="fade-up"
        >
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

      <div
        className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 px-6 py-6 "
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
      >
        {services.slice(0, 3).map((service) => (
          <div
            key={service.id}
            className="bg-transparent rounded-lg shadow-lg animate-spin-slow"
          >
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-3xl font-bold text-white text-center">
                {service.name}
              </h2>
              <p className="mt-4 text-xl text-white text-center">
                {service.description}
              </p>
              <img
                src={service.image}
                alt={service.name}
                className="h-48 w-full object-cover mt-4 rounded-lg"
              />
              <Link to={`/services/${service.id}`}>
                <button className="bg-gradient-to-r from-sky-500 to-green-500 hover:from-green-500 hover:to-sky-500 border-transparent text-white font-bold py-2 px-4 rounded-full mt-4">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <h2
        className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-green-500 font-bold text-center mt-12  rounded-lg px-6"
        data-aos="fade-up" data-aos-anchor-placement="top-bottom" 
      >
        Our Artists
      </h2>
      <div
        className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 px-6 py-6 "
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        {artists.slice(0, 4).map((artist) => (
          <div
            className="bg-white rounded-lg shadow-lg relative overflow-hidden"
            data-aos-easing="ease-in-out"
            data-aos-duration="1500"
            data-aos-once="false"
          >
            <img
              src={artist.image}
              alt="Image"
              className="h-full w-full object-cover rounded-lg shadow-lg transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"/>
            <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-white opacity-0 hover:opacity-100 transition duration-500 ease-in-out">
              <div className="bg-gradient-to-r from-sky-500 p-4 rounded-lg absolute bottom-0 left-0 right-0 text-center text-4xl font-bold transition duration-500 ease-in-out hover:scale-110">
                {artist.name}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Gallery />
    </>
  );
};

export default Feed;
