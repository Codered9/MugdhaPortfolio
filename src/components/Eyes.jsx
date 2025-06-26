import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Eyes = () => {
  const svgRef = useRef(null);
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

    useEffect(() => {
      const svg = svgRef.current;
      const mouse = svg.createSVGPoint();
      let lastAngle = 0

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
            let angle = Math.atan2(dy, dx);
          
            // Convert from radians to degrees
            let angleDeg = angle * (180 / Math.PI);
            // console.log(angleDeg)
            let lastAngleDeg = lastAngle * (180 / Math.PI);
          
            // Normalize angles to avoid spinning
            let delta = angleDeg - Math.abs(lastAngleDeg);
            if (delta > 180) angleDeg -= 360;
            else if (delta < -180) angleDeg += 360;
          
            // Animate with actual degree value
            gsap.to(element, {
              duration: 0.3,
              rotation: angleDeg,
              transformOrigin: "50% 50%",
            });
          
            // Update lastAngle
            lastAngle = angle;
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
      className="h-full w-full pointer-events-none"
    >
      <g ref={leftEyeRef}>
        <circle
          cx="400"
          cy="500"
          r="100"
          className="fill-cus-white stroke-cus-white stroke-[1]"
        />
        <circle cx="445" cy="500" r="55" className="fill-cus-black" />
      </g>

      <g ref={rightEyeRef}>
        <circle
          cx="600"
          cy="500"
          r="100"
          className="fill-cus-white stroke-cus-white stroke-[1]"
        />
        <circle cx="645" cy="500" r="55" className="fill-cus-black" />
      </g>
    </svg>
  );
};

export default Eyes;
