import "./App.css";
import React, { useEffect, useRef } from 'react';
import Bio from "./components/Bio";
import Footer from "./components/Footer";
import HeroArt from "./components/HeroArt";
import Projects from "./components/Projects";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmoothScoll from "./components/SmoothScroll";
import BackgroundLines from "./components/BackgroundLines";
import MiniProject from "./components/MiniProjects";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const bioRef = useRef(null);

  return (
    <>
    <SmoothScoll>
      <div className="">
          <BackgroundLines bioRef={bioRef}/>
          <HeroArt />
          <Bio bioRef={bioRef}/>
          <Projects />
          <MiniProject />
          <Footer />
        </div>
    </SmoothScoll>
    </>
  );
}

export default App;
