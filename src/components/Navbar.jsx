import Logo from "../assets/images/Logo.svg";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0  w-full z-999">
      <div className="w-7xl mx-auto flex justify-between items-center pt-4 font-syne font-bold mix-blend-difference text-cus-black">
        <div className="text-2xl">
          <img src={Logo} alt="Mugdha" className="w-20" />
        </div>
        <ul className="flex space-x-12 font-semibold">
          <li>
            <a href="#Bio" className="hover:text-indigo-500">
              ABOUT ME
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-indigo-500">
              WORK
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-indigo-500">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
