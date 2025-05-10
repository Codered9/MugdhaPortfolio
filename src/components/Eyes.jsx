import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Eyes = () => {
  const svgRef = useRef(null);
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

    useEffect(() => {
      const svg = svgRef.current;
      const mouse = svg.createSVGPoint();

      const createEye = (element) => {
        gsap.set(element, {
          transformOrigin: "center",
        });

        const bbox = element.getBBox();
        const centerX = bbox.x + bbox.width / 2;
        const centerY = bbox.y + bbox.height / 2;

        const rotateTo = (point) => {
          const dx = point.x - centerX;
          const dy = point.y - centerY;
          const angle = Math.atan2(dy, dx);
          gsap.to(element, {
            duration: 0.3,
            rotation: `${angle}_rad_short`,
          });
        };

        return { element, rotateTo };
      };

      const leftEye = createEye(leftEyeRef.current);
      const rightEye = createEye(rightEyeRef.current);

      let requestId = null;

      const onFrame = () => {
        const point = mouse.matrixTransform(svg.getScreenCTM().inverse());
        leftEye.rotateTo(point);
        rightEye.rotateTo(point);
        requestId = null;
      };

      const onMouseMove = (event) => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
        if (!requestId) {
          requestId = requestAnimationFrame(onFrame);
        }
      };

      window.addEventListener("mousemove", onMouseMove);

      return () => {
        window.removeEventListener("mousemove", onMouseMove);
      };
    }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 1000 1000"
    //   className="fixed w-full h-full pointer-events-none"
      className="w-[1000px] h-[1000px] pointer-events-none"
    >
      <g ref={leftEyeRef}>
        <circle
          cx="400"
          cy="500"
          r="100"
          className="fill-cus-white stroke-cus-white stroke-[1]"
        />
        <circle cx="465" cy="500" r="35" className="fill-black" />
      </g>

      <g ref={rightEyeRef}>
        <circle
          cx="600"
          cy="500"
          r="100"
          className="fill-cus-white stroke-cus-white stroke-[1]"
        />
        <circle cx="665" cy="500" r="35" className="fill-black" />
      </g>
    </svg>
  );
};

export default Eyes;
