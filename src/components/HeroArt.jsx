import UiUxTag from "../assets/uiuxtag.svg";

function HeroArt() {
  return (
    <div className="h-screen  flex items-center justify-center">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto z-100">
        <div className="flex flex-row -mb-12">
          <p className="text-[330px] leading-none font-medium font-tans text-cus-orange">
            HELLO
          </p>
          <img src={UiUxTag} alt="Tag" className="h-48 ml-16 mt-8" />
        </div>{" "}
        {/*HELLO and Tag */}
        <div>
          {" "}
          {/* I'm Mugdha*/}
          <p className="font-medium font-tans text-cus-orange text-[330px] leading-none">
            I'M MUGDHA
          </p>
        </div>
        <div>
          {" "}
          {/* Intro line*/}
          <p className="text-4xl text-center font-syne font-medium -mt-12">
            A designer who listens deeply, thinks curiously, and crafts with
            heart.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroArt;
