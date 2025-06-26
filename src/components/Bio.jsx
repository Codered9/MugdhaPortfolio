import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Bio() {
   const bioRef = useRef(null);

    useEffect(() => {
        gsap.to(bioRef.current, {
            scrollTrigger: {
                trigger: bioRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                toggleClass: { targets: bioRef.current, className: "sticky-toggle"}
            },
            ease: "none",
        });
    }, []);

    return (
        <>
        <div ref={bioRef} id="Bio" className="h-screen  text-5xl font-syne font-semibold flex items-center justify-center -z-100" > 
            <div className="max-w-7xl mx-auto my-auto text-left">
            <p className="">Currently crafting fintech experiences at <bold className="text-[#C74634]">Oracle</bold>, helping banks feel just a little more human. As a designer, I love figuring out how people navigate their daily lives & make decisions, often noticing the small details that shape their behaviour.</p>
            <p className="mt-8">I’m always asking why, testing what if, and learning from oops. These observations help me create designs which are scroll-worthy, tap-happy experiences, where every detail has a reason and every interacton just makes sense.</p>
            </div>
        </div>
        </>
    )
}

export default Bio