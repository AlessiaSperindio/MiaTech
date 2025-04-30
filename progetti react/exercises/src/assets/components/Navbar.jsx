import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const styles = {
    primaryColor: "#4281A4", // Azzurro chiaro
    darkBackground: "#0F192E", // Colore scuro
  };

  return (
    <>
      <nav className="flex items-center justify-between px-4 py-2 border-b bg-secondary text-primary fixed top-0 left-0 right-0"
      >
        {/* Logo o titolo */}
        <div className="flex items-center">
          <h1 className="text-xl font-bold">Aquatic Paradise</h1>
        </div>
        {/* Link di navigazione */}
        <div className="flex space-x-4 font-bold text-primary">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;