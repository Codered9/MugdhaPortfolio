import ProjectComp from "./ProjectComp"

function Projects() {
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
    return (
        <>
        <div className="min-h-screen  flex items-center justify-center bg-cus-black snap-start">
            <div className="flex flex-col my-40 gap-20 max-w-5xl">
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