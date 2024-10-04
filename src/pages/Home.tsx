import { useEffect, useRef } from "react";
import axios from "axios";
import { Box, Text, Flex, Wrap } from "@chakra-ui/react";
import React from "react";
import { useSpring, animated } from "react-spring";
import "./HeroSection.css";
import { useInView } from "react-intersection-observer";
import "./SlideInComponent.css";
import CountUp from "react-countup";

import Lottie from "react-lottie";
import Typewriter from "typewriter-effect";
import "./HeroSection.css";
import "./SvgDrawing.css";
import { div } from "framer-motion/client";
const images = [
  "https://via.placeholder.com/300x200?text=Image+1",
  "https://via.placeholder.com/300x200?text=Image+2",
  "https://via.placeholder.com/300x200?text=Image+3",
  "https://via.placeholder.com/300x200?text=Image+4",
  "https://via.placeholder.com/300x200?text=Image+5",
];

const Home = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  useEffect(() => {
    test();
  });
  const test = async () => {
    const data = await axios.get("http://localhost:5001/users");
    console.log(data);
  };

  return (
    // <div className="hero">
    //   <animated.div style={fadeIn} className="hero-content">
    //     <h1>Welcome to Our Service</h1>
    //     <p>Your success starts here</p>
    //     <button>Get Started</button>
    //   </animated.div>
    //   <animated.div style={fadeIn} className="hero-content">
    //     <h1>Welcome to Our Service</h1>
    //     <p>Your success starts here</p>
    //     <button>Get Started</button>
    //   </animated.div>
    // </div>
    <div className="image-container">
      {images.map((src, index) => (
        <div key={index} className="image-box">
          <img src={src} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Home;
