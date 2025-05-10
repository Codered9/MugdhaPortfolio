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
          <div className="h-100 w-100 absolute -top-40 -right-30">

          <Eyes />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
