import axios from "axios";
import { useState , useEffect } from "react";
import "aos/dist/aos.css";
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Feed from "./pages/Feed.js";
import Footer from "./components/Footer";
import About from "./pages/About..js";
import Contact from "./pages/Contact.js";
import Pricing from "./pages/Pricing.js";
import { Routes, Route } from "react-router-dom";
import Features from "./pages/Features.js";
import Music from "./pages/Music.js";
import Gallery from "./components/Gallery.js";
function App() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/services/")
      .then((res) => {
        console.log(res.data);
        setServices(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
      
  }, []);

  const [artists, setArtists] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/artists/")
      .then((res) => {
        console.log(res.data);
        setArtists(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App bg-[url('https://www.audiomentor.com/wp-content/uploads/2017/01/the-ultimate-guide-to-buying-micropone-for-recording-studio-1024x640.jpg')] bg-cover bg-center bg-no-repeat">
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed services={services} artists={artists} />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/music" element={<Music />} />
        <Route path="/gallery/:id" element={<Gallery  />} />
      </Routes>
    
      <Footer />
    </div>
  );
}

export default App;

