import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText"; // Ensure you have access to this plugin
import UiUxTag from "../assets/uiuxtag.svg";

gsap.registerPlugin(SplitText);

function HeroArt() {
  const hello = useRef(null);
  const mugdha = useRef(null);

  // useEffect(() => {

    
    
  //   const ctx = gsap.from(hello.current, {
  //     // y: 200,
  //     delay: 2,
  //     duration:1,
  //     // opacity:0
  //     // ease: 
  //   })

  //   ctx.play()
    
  // }, [])


  return (
    <div className="h-screen  flex items-center justify-center">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto w-full relative leading-[0.75]">
          <p
            ref={hello}
            className="text-[330px] font-medium font-tans text-cus-orange"
          >
            HELLO
          </p>
          <img src={UiUxTag} alt="Tag" className="h-48 absolute top-0 right-0" />
          <p
            ref={mugdha}
            className="font-medium font-tans text-cus-orange text-[330px]"
          >
            I'M MUGDHA
          </p>
          {" "}
          {/* Intro line*/}
          <p className="text-4xl text-center font-syne font-medium">
            A designer who listens deeply, thinks curiously, and crafts with
            heart.
          </p>
      </div>
    </div>
  );
}

export default HeroArt;
