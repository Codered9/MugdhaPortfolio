function ProjectComp({ subheading, heading, imageUrl }) {
  return (
    <>
      <div className="flex font-syne group w-6xl bg-cus-white">
        <div className="text-cus-black overflow-hidden pl-8 w-1/4 h-full self-center">
          <p className="text-3xl">
            {subheading}
          </p>
          <p className="text-5xl font-semibold mt-2">
            {heading}
          </p>
        </div>
        <div className="relative rounded-lg shadow-lg w-3/4">
          <img
            src={imageUrl}
            alt="Project Image"
            className="w-full object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default ProjectComp;
