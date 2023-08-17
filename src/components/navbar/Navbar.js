import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="h-14 bg-blue-900 flex justify-center">
      <div className="w-full max-w-5xl text-white flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          Booking.com
        </Link>
        <div>
          <button className="ml-5 border-0 py-0.5 px-2.5 cursor-pointer rounded text-blue-700 bg-white">
            Register
          </button>
          <button className="ml-5 border-0 py-0.5 px-2.5 cursor-pointer rounded text-blue-700 bg-white">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
