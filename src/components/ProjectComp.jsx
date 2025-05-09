function ProjectComp({ subheading, heading, imageUrl }) {
  return (
    <>
      <div className="flex font-syne group w-7xl bg-black">
        <div className="text-cus-white overflow-hidden pl-8 w-[35%] h-full self-center">
          <p className="text-3xl font-semibold">
            {subheading}
          </p>
          <p className="text-5xl/16 font-semibold mt-2 ">
            {heading}
          </p>
        </div>
        <div className="relative rounded-lg shadow-lg w-[65%]">
          <img
            src={imageUrl}
            alt="Project Image"
            className="h-[28rem] w-full object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default ProjectComp;
