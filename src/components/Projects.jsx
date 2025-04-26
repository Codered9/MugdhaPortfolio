import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectComp from "./ProjectComp"

gsap.registerPlugin(ScrollTrigger);

function Projects() {
    const projectRef = useRef(null);
    const ProjectData = [
        {
            "subheading": "Oracle | Aug 2025",
            "heading": "Entitlements",
            "imageUrl": "./src/assets/images/oracle.png"
        },
        {
            "subheading": "Tekion | Jan 2024",
            "heading": "Purchase Order",
            "imageUrl": "./src/assets/images/purchaseorder.png"
        },
        {
            "subheading": "Samsung | Aug 2025",
            "heading": "Communication",
            "imageUrl": "./src/assets/images/communication.png"
        },
        {
            "subheading": "Passion Project | Nov 2024",
            "heading": "Figma Plugin",
            "imageUrl": "./src/assets/images/figmaplugin.png"
        },
    ]

    useEffect(() => {
        gsap.to(projectRef.current, {
            scrollTrigger: {
                trigger: projectRef.current,
                start: "top bottom",    // when top of projects hits bottom of viewport
                end: "top top",          // until projects fully cover screen
                scrub: true,             // smooth scrubbing
                pin: false,              // we are not pinning projects (only Bio is sticky)
            },
            y: "-100vh",                 // move Projects up by full height
            ease: "none",
        });
    }, []);


    return (
        <>
        <div ref={projectRef} className="min-h-screen  flex items-center justify-center bg-cus-black snap-start">
        {/* <div ref={projectRef} className="relative bg-cus-black"> */}
            <div className="flex flex-col my-40 gap-20 max-w-6xl min-w-5xl">
                {ProjectData.map((project, index) => (
                    <ProjectComp
                        key={index}
                        subheading={project.subheading}
                        heading={project.heading}
                        imageUrl={project.imageUrl}
                    />
                ))

                }
            </div>
        </div>
        </>
    )
}

export default Projects