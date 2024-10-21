import React from "react";
import Logo from "../Movielogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row gap-4 py-3 pl-4 border items-center">
      <img src={Logo} className="w-[30px]" />
      <Link to="/" className="text-blue-500 font-extrabold">
        Movies
      </Link>
      <Link to="/watchlist" className="text-blue-500 font-extrabold">
        WatchList
      </Link>
    </div>
  );
};
export default Navbar;
