import UiUxTag from "../assets/uiuxtag.svg";

function HeroArt() {
  return (
    <div className="h-screen  flex items-center justify-center">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-row justify-between pb-0">
          <p className="text-[200px] leading-none font-semibold font-tans text-cus-orange tracking-tighter pb-0 transform scale-y-125">HELLO</p>
          <img src={UiUxTag} alt="Tag" className="w-64 pb-0" />
        </div>{" "}
        {/*HELLO and Tag */}
        <div>
          {" "}
          {/* I'm Mugdha*/}
          <p className="font-semibold font-tans text-cus-orange tracking-tighter text-[200px] leading-none transform scale-y-125">I'M MUGDHA</p>
        </div>
        <div>
          {" "}
          {/* Intro line*/}
          <p className="text-3xl text-center font-tans font-medium">
            A designer who listens deeply, thinks curiously, and crafts with
            heart.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroArt;
