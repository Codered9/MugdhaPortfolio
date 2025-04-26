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
        <div ref={projectRef} id="projects" className="flex flex-col items-center justify-center bg-cus-black snap-start z-100 -mb-[100vh]">
        {/* <div ref={projectRef} className="relative bg-cus-black"> */}
            <div className="flex flex-col gap-20 max-w-6xl w-full px-6 py-40">
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