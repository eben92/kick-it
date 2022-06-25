import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className=''>
      <Link to={"/"}>
        <h1>Kick it</h1>
      </Link>
    </div>
  );
};

export default Navbar;
