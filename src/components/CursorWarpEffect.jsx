import { useEffect } from "react";
import { gsap } from "gsap";

function CursorWarpEffect() {
  useEffect(() => {
    const lines = gsap.utils.toArray(".line");

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      // Radius of the warp effect (the area around the cursor)
      const radius = 50;

      lines.forEach((line, index) => {
        const linePosition = line.getBoundingClientRect();
        const lineCenterX = linePosition.left + linePosition.width / 2;
        const lineCenterY = linePosition.top + linePosition.height / 2;

        // Calculate the distance from the cursor to the line
        const dx = clientX - lineCenterX;
        const dy = clientY - lineCenterY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // If the cursor is close enough, apply the warp effect
        if (distance < radius) {
          // Calculate how much the line should move based on distance
          const movement = (radius - distance) / radius * 20; // 20 is the max warp amount

          // Apply the warp effect to the Y-axis (up and down)
          gsap.to(line, {
            y: -movement,  // Move line up or down based on distance
            ease: "power2.out",
            duration: 0.2,
          });
        } else {
          // Reset the line to its original position if it's out of the cursor's range
          gsap.to(line, {
            y: 0,
            ease: "power2.out",
            duration: 0.2,
          });
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
      {Array.from({ length: 30 }).map((_, index) => (
        <div
          key={index}
          className="line absolute top-0 w-1 h-full bg-white"
          style={{
            left: `${(index / 30) * 100}vw`,  // Distribute lines across the width
          }}
        ></div>
      ))}
    </div>
  );
}

export default CursorWarpEffect;
