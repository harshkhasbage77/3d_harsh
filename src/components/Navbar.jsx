import { NavLink } from "react-router-dom";
import './Navbar.css';
import { useState } from "react";

import { HK77_Logo, HK77_Logo_layout, HK77_Logo_symbol, logo } from "../assets/images";

// function handleWindowSizeChange() {
//   setWidth(window.innerWidth);
// }

// useEffect(() => {
//   window.addEventListener('resize', handleWindowSizeChange);
//   return () => {
//       window.removeEventListener('resize', handleWindowSizeChange);
//   }
// }, []);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const isMobile = width <= 768;

  const [isMobileView, setIsMobileView] = useState(isMobile);

  return (
    <header className='header'>
      <NavLink to='/3d_harsh/'>
        <img src={HK77_Logo_symbol} alt='logo' className='w-24 h-24 object-contain rounded-3xl' />
      </NavLink>

      <nav className={`md:flex text-lg gap-7 font-medium hidden md:visible`}>
        {/* navigation items */}

        <a href="https://drive.google.com/file/d/1jcy0HGY258cbLxdDVWIHelD8DX0MxW_p/view?usp=drive_link" target="_blank">
          <button type="button" className="button">
            <span className="fold"></span>

            <div className="points_wrapper">
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
            </div>

            <span className="inner">
                <svg
                  className="icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  // stroke-linecap="round"
                  // stroke-linejoin="round"
                  // stroke-width="2.5"
                >
                  <path d="M14 2v6h6" />
                  <path d="M4 4v16h16V8l-6-6H4z" />
                  <path d="M8 12h1v4H8" />
                  <path d="M11 12h1v4h-1" />
                  <path d="M14 16h1v-4h-1" />
                  <path d="M14 12h1v-1.5" />
                </svg>
              Resume
            </span>
          </button>
        </a>

        {/* <NavLink to='/3d_harsh/about' className={`${({ isActive }) => isActive ? "text-blue-600" : "text-black"} navbar-items`}>
          About
        </NavLink> */}

        <NavLink to='/3d_harsh/about' className={({ isActive }) => isActive ? "text-blue-600 navbar-items" : "text-black navbar-items"}>
          About
        </NavLink>
        <NavLink to='/3d_harsh/projects' className={({ isActive }) => isActive ? "navbar-items text-blue-600" : "navbar-items text-black"}>
          Projects
        </NavLink>
        <NavLink to='/3d_harsh/contact' className={({ isActive }) => isActive ? "navbar-items text-blue-600" : "navbar-items text-black"}>
          Contact
        </NavLink>
      </nav>

      <nav id="thisNav" 
      className={`md:hidden flex flex-col absolute top-4 right-16 sm:right-24 bg-slate-400/50 backdrop-blur-sm rounded-xl transition-all duration-300 ease-in-out 
        ${isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
    
      >
        <a href="https://drive.google.com/file/d/1jcy0HGY258cbLxdDVWIHelD8DX0MxW_p/view?usp=drive_link" target="_blank">
          <button type="button" className="button">
            <span className="fold"></span>

            <div className="points_wrapper">
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
            </div>

            <span className="inner">
                <svg
                  className="icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  // stroke-linecap="round"
                  // stroke-linejoin="round"
                  // stroke-width="2.5"
                >
                  <path d="M14 2v6h6" />
                  <path d="M4 4v16h16V8l-6-6H4z" />
                  <path d="M8 12h1v4H8" />
                  <path d="M11 12h1v4h-1" />
                  <path d="M14 16h1v-4h-1" />
                  <path d="M14 12h1v-1.5" />
                </svg>
              Resume
            </span>
          </button>
        </a>
        <NavLink to='/3d_harsh/about' className={({ isActive }) => isActive ? "text-blue-600 navbar-items" : "text-black navbar-items"}>
          About
        </NavLink>
        <NavLink to='/3d_harsh/projects' className={({ isActive }) => isActive ? "navbar-items text-blue-600" : "navbar-items text-black"}>
          Projects
        </NavLink>
        <NavLink to='/3d_harsh/contact' className={({ isActive }) => isActive ? "navbar-items text-blue-600" : "navbar-items text-black"}>
          Contact
        </NavLink>
      </nav>

      <button 
        className="md:hidden p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

    </header>
  );
};


export default Navbar;
