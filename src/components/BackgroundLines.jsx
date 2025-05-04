import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function BackgroundLines({bioRef}) {
  const linesContainerRef = useRef(null);

  useEffect(() => {
    if (!bioRef?.current) return;

    gsap.to(linesContainerRef.current, {
      scrollTrigger: {
        trigger: bioRef.current,
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
      scale: 2,
      transformOrigin: "center center",
      ease: "none",
    });
  }, [bioRef]);

  return (
    <div
      ref={linesContainerRef}
      className="absolute inset-0 z-0 pointer-events-none"
    >
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="absolute top-0 h-full w-px bg-white/10"
          style={{
            left: `${(i / 14) * 100}%`,
          }}
        />
      ))}
    </div>
  );
}

export default BackgroundLines;
