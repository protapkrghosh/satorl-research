import { Link, NavLink } from 'react-router-dom';
import img from '../../assets/logo/design 1.png'
import Container from '../../Components/Container/Container';
import { MdArrowOutward } from "react-icons/md";

const NavBar = () => {
  const navOptions = <>
    <NavLink to="/" className='mt-2 text-[#6B6463]' style={({ isActive, isPending }) => {
      return { fontWeight: isActive ? "bold" : "#030000", color: isPending ? "#030000" : "#030000", };
    }}> Home </NavLink>
    <NavLink to="/about" className='mt-2 text-[#6B6463] mx-[50px]' style={({ isActive, isPending }) => {
      return { fontWeight: isActive ? "bold" : "", color: isPending ? "#030000" : "#030000", };
    }}> About </NavLink>
    <NavLink to="/portfolio" className='mt-2 text-[#6B6463]' style={({ isActive, isPending }) => {
      return { fontWeight: isActive ? "bold" : "", color: isPending ? "#030000" : "#030000", };
    }}> Portfolio </NavLink>
  </>

  return (
    <Container>
      <div className="navbar font-dmSans mt-5 px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navOptions}
            </ul>
          </div>
          <Link>
            <img src={img} alt="Logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/" className="bg-[#9B0801] text-white text-[16px] px-8 py-3 flex items-center rounded-md group">
            <span className=''>Contact</span>
            <MdArrowOutward className='text-[18px] ml-2' /></Link>
        </div>
      </div>
    </Container>
  );
};

export default NavBar;
