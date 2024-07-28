import { NavLink } from "react-router-dom";

function PageNav() {
  return (
    <nav className="w-full fixed px-5 lg:px-8 xl:px[8%] py-4 flex items-center justify-between z-50">
      <a href="/">
        <img
          src="./ioxx.png"
          alt="Logo"
          className="w-28 cursor-pointer ml-8 bg-transparent"
        />
      </a>
      <ul className="hidden md:flex items-center gap-8 lg:gap-10 rounded-full px-6 py-3 ml-20 bg-white shadow-sm bg-opacity-50">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
      </ul>
      <div className="flex items-center gap-1">
        <button className="ml-2">
          <img src="./planet-icon.png" alt="planet-icon" className="w-8" />
        </button>

        <a
          href="/contact"
          className="hidden md:flex md:text-center items-center gap-3 ml-8 px-10 py-2 border bg-gradient-to-tr from-[#405D72] to-[#d7d8da] text-white rounded-full"
        >
          Contact Me
        </a>
      </div>
    </nav>
  );
}

export default PageNav;
