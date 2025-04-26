function ProjectComp ({subheading, heading, imageUrl}) {
    return (
        <>
        <div className="grid grid-cols-2 font-syne">
            <div className="text-cus-white my-auto">
                <p className="text-3xl">{subheading}</p>
                <p className="text-5xl font-semibold mt-2">{heading}</p>
            </div>
            <div>
                <img src={imageUrl} alt="Project Image" className="w-full" />
            </div>
        </div>
        </>
    )
}

export default ProjectComp