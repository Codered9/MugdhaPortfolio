import Eyes from "./Eyes";

function Footer() {
  return (
    <>
      <div className="h-screen text-4xl font-syne font-semibold flex items-center justify-center snap-start bg-cus-black">
        <div className="w-7xl text-left relative">
          <p className="text-[200px] font-medium font-tans text-cus-orange">
            Soooo,
          </p>
          <p className="text-[200px] font-medium font-tans text-cus-orange ">
            What's Next?
          </p>
          {/* <img src="./src/assets/images/Eyes.png" alt="Eyes"  /> */}
          <div className="h-80 absolute top-0 right-0">
            <Eyes />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
