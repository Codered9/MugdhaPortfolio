import "./App.css";
import React, { useEffect, useRef } from 'react';
import Bio from "./components/Bio";
import Footer from "./components/Footer";
import HeroArt from "./components/HeroArt";
import Projects from "./components/Projects";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

function App() {

  // const lenis = useRef(null);

  // useEffect(() => {
  //   // Initialize Lenis
  //   lenis.current = new Lenis({
  //     duration: 0.6, // Control the duration of the scroll
  //     easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing for smooth stop
  //     smooth: true,
  //     smoothTouch: true, // Enable smooth scrolling on touch devices
  //   });

  //   const animate = (time) => {
  //     lenis.current.raf(time);
  //     requestAnimationFrame(animate);
  //   };

  //   requestAnimationFrame(animate);

  //   // Cleanup on unmount
  //   return () => {
  //     lenis.current.destroy();
  //   };
  // }, []);

  // const scrollToSection = (id) => {
  //   const element = document.getElementById(id);
  //   lenis.current.scrollTo(element);
  // };

  return (
    <>
      <div className="" id="smooth-wrapper scroll-smooth">
          <HeroArt />
          <Bio />
          <Projects />
          <Footer />
        </div>
    </>
  );
}

export default App;
