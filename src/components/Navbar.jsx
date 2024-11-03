import { NavLink } from "react-router-dom";

import { HK77_Logo, HK77_Logo_layout, HK77_Logo_symbol, logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/3d_harsh/'>
        {/* <img src={logo} alt='logo' className='w-18 h-18 object-contain' /> */}
        {/* <img src={HK77_Logo} alt='logo' className='w-18 h-18 object-contain' />
        <img src={HK77_Logo_layout} alt='logo' className='w-18 h-18 object-contain' /> */}
        <img src={HK77_Logo_symbol} alt='logo' className='w-24 h-24 object-contain rounded-3xl' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/3d_harsh/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/3d_harsh/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
