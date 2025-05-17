import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectComp from "./ProjectComp";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const projectRef = useRef(null);
  const ProjectData = [
    {
      subheading: "Oracle | Aug 2025",
      heading: "Entitlements",
      imageUrl: "./src/assets/images/Entitlements.png",
    },
    {
      subheading: "Tekion | Jan 2024",
      heading: "Search",
      imageUrl: "./src/assets/images/Search.png",
    },
    {
      subheading: "Samsung | Aug 2025",
      heading: "Parts Purchase Order",
      imageUrl: "./src/assets/images/PartsPurchasedOrder.png",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(projectRef.current, {
        scrollTrigger: {
          trigger: projectRef.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
          pin: false,
        },
        y: "-100vh",
        ease: "none",
      });
    }, projectRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={projectRef}
        id="projects"
        className="flex flex-col items-center justify-center text-center bg-cus-black snap-start z-100 -mb-[100vh] relative"
      >
        {/* <div ref={projectRef} className="relative bg-cus-black"> */}

        <div className="max-w-7xl">
            <p className="text-[200px] font-medium font-tans text-cus-orange mt-40">SELECTED WORK</p>
            <p className="text-6xl text-cus-white text-center font-syne font-medium">Throughtful. Intentional. Human</p>
          <div className="flex flex-col gap-20 w-full my-48 sticky">
            {ProjectData.map((project, index) => (
              <ProjectComp
                key={index}
                subheading={project.subheading}
                heading={project.heading}
                imageUrl={project.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
