import { useEffect, useRef } from "react";
import { gsap } from "gsap";


function BackgroundLines() {
  const linesContainerRef = useRef(null);

  useEffect(() => {

    gsap.to(linesContainerRef.current, {
      scrollTrigger: {
        trigger: linesContainerRef.current,
        start: "bottom bottom",
        end: "bottom top",
        scrub: true,
        // markers: true
      },
      scale: 2,
      // width: 200,
      transformOrigin: "center center",
      ease: "none",
    });
  }, [linesContainerRef.current]);

  return (
    <div
      ref={linesContainerRef}
      className="fixed top-0 -z-10 inset-0 pointer-events-none"
    >
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="absolute top-0 h-full w-px bg-cus-black/10"
          style={{
            left: `${(i / 14) * 100}%`,
          }}
        />
      ))}
    </div>
  );
}

export default BackgroundLines;
