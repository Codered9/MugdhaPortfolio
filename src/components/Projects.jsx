import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectComp from "./ProjectComp";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const headingRef = useRef(null);
  const ProjectData = [
    {
      subheading: "Oracle | Aug 2025",
      heading: "Entitlements",
      imageUrl: "/Entitlements.png",
      url: "/projects/Entitlements",
    },
    {
      subheading: "Tekion | Jan 2024",
      heading: "Search",
      imageUrl: "/Search.png",
      url: "/projects/Search",
    },
    {
      subheading: "Samsung | Aug 2025",
      heading: "Parts Purchase Order",
      imageUrl: "/PartsPurchasedOrder.png",
      url: "/projects/PurchaseOrder",
    },
  ];

  useEffect(() => {
    gsap.to(headingRef.current, {
      scrollTrigger: {
        trigger: headingRef.current,
        start: "40% center",
        end: "250% center",
        scrub: true,
      },
      scale: 0.75,
      ease: "none",
    });
    gsap.to(headingRef.current, {
      scrollTrigger: {
        trigger: headingRef.current,
        start: "40% center",
        end: "250% center",
        scrub: true,
      },
      opacity: 100,
      ease: "power2.in",
    });
  }, []);

  return (
    <>
      <div
        id="projects"
        className="flex flex-col items-center justify-center text-center bg-cus-black snap-start"
      >

        <div className="max-w-7xl">
          <div>
            {/* <div className="h-screen"></div> */}
            <div className="h-[40vh] bg-cus-black"></div>
            <p ref={headingRef}
              className="text-[220px] font-medium font-tans text-cus-orange mt-40  sticky top-80 opacity-0"
            >
              SELECTED WORK
            </p>
            <div className="h-[50vh]"></div>
            <p className="text-6xl mt-10 text-cus-white text-center font-syne font-medium">
              Throughtful. Intentional. Human
            </p>
          </div>
          <div className="flex flex-col gap-20 w-full my-48 sticky">
            {ProjectData.map((project, index) => (
              <ProjectComp
                key={index}
                subheading={project.subheading}
                heading={project.heading}
                imageUrl={project.imageUrl}
                url={project.url}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
