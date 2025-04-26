import UiUxTag from "../assets/uiuxtag.svg";

function HeroArt() {
  return (
    <div className="h-screen  flex items-center justify-center bg-[#F7F1E0] snap-start">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-row pb-0">
          <p className="text-[200px] leading-none font-semibold font-tans text-cus-orange tracking-tight pb-0 transform scale-y-150">HELLO</p>
          <img src={UiUxTag} alt="Tag" className="w-80 pb-0 ml-20" />
        </div>{" "}
        {/*HELLO and Tag */}
        <div>
          {" "}
          {/* I'm Mugdha*/}
          <p className="font-semibold font-tans text-cus-orange tracking-tight text-[200px] leading-none transform scale-y-150 mt-8">I'M MUGDHA</p>
        </div>
        <div>
          {" "}
          {/* Intro line*/}
          <p className="text-4xl text-center font-syne font-medium mt-8">
            A designer who listens deeply, thinks curiously, and crafts with
            heart.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroArt;
