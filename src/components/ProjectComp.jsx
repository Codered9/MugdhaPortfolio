import { Link } from "react-router";

function ProjectComp({ subheading, heading, imageUrl,url }) {
  return (
    <>
      <Link to={url}>
        <div className="flex font-syne group w-7xl bg-black transition-all duration-500 transform hover:translate-x-4 hover:-translate-y-4 ease-in-out saturate-0 hover:saturate-100">
          <div className="text-cus-white overflow-hidden pl-8 w-[35%] h-full self-center text-left">
            <p className="text-3xl font-semibold">{subheading}</p>
            <p className="text-5xl/16 font-semibold mt-2 ">{heading}</p>
          </div>
          <div className="relative rounded-lg shadow-lg w-[65%]">
            <img
              src={imageUrl}
              alt="Project Image"
              className="h-[28rem] w-full object-cover "
            />
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProjectComp;
