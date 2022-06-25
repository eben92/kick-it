import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className=' flex items-center justify-between bg-white shadow p-11 text-[#333] '>
      <Link to={"/"} className='text-[#333]'>
        <h1 className='text-4xl text-inherit'>KICK_it</h1>
      </Link>
    </div>
  );
};

export default Navbar;
