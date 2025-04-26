function ProjectComp({ subheading, heading, imageUrl }) {
  return (
    <>
      <div className="grid grid-cols-2 font-syne">
        <div className="text-cus-white my-auto">
          <p className="text-3xl">{subheading}</p>
                <p className="text-5xl font-semibold mt-2">{heading}</p>
        </div>
        <div className="group relative w-80 h-80 rounded-lg shadow-lg">
          {/* Sepia Overlay */}
          <div className="absolute inset-0 bg-yellow-900 opacity-0 group-hover:opacity-30 transition-all duration-500 transform group-hover:-translate-x-2 group-hover:translate-y-2 z-10"></div>

          <img
            src={imageUrl}
            alt="Project Image"
            className="w-full h-full object-cover transition-all duration-500 transform group-hover:translate-x-2 group-hover:-translate-y-2"
          />
        </div>
      </div>
    </>
  );
}

export default ProjectComp;
