import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <div className='container p-10'>
        <Link to={"/"} className='font-bold text-2xl'>
          <h1 className='text-2xl text-inherit'>KICK_it</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
