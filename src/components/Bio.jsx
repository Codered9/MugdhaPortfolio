import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Bio() {
    return (
        <>
        <div className="h-screen sticky top-0 text-4xl font-syne font-semibold flex items-center justify-center snap-start z-0">
            <div className="max-w-4xl mx-auto my-auto text-center">
            <p className="">Currently crafting fintech experiences at Oracle, helping banks feel just a little more human. As a designer, I love figuring out how people navigate their daily lives & make decisions, often noticing the small details that shape their behaviour.</p>
            <p className="mt-8">I’m always asking why, testing what if, and learning from oops. These observations help me create designs which are scroll-worthy, tap-happy experiences, where every detail has a reason and every interacton just makes sense.</p>
            </div>
        </div>
        </>
    )
}

export default Bio