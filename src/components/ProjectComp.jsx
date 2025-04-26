function ProjectComp({ subheading, heading, imageUrl }) {
  return (
    <>
      <div className="grid grid-cols-2 font-syne group gap-12">
  <div className="text-cus-white my-auto w-full overflow-hidden pl-8">
    <p className="text-3xl transition-all duration-500 group-hover:scale-105 group-hover:tracking-wide group-hover:text-cus-orange">{subheading}</p>
    <p className="text-5xl font-semibold mt-2 transition-all duration-500 group-hover:scale-105 group-hover:tracking-wide group-hover:text-cus-orange">{heading}</p>
  </div>
  <div className="group relative w-80 h-80 rounded-lg shadow-lg">
    <div className="absolute inset-0 bg-cus-orange opacity-0 group-hover:opacity-30 transition-all duration-500 transform group-hover:-translate-x-2 group-hover:translate-y-2 z-10"></div>
    <img src={imageUrl} alt="Project Image" className="w-full h-full object-cover transition-all duration-500 transform group-hover:translate-x-2 group-hover:-translate-y-2" />
  </div>
</div>

    </>
  );
}

export default ProjectComp;
