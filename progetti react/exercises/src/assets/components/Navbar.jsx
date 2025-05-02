import React from "react";
//import { Link } from "react-router-dom";
//import tailwindcss from "@tailwindcss/vite";


const Navbar = () => {

  

  return (
    <>
      <nav className="navbar fixed-top bg-cyan-950 text-slate-200 ">
       
        <div className="container-fluid">
          <h1 >Aquatic Paradise</h1>
        </div>
        
        <div className="container-fluid">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
