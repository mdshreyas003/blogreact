import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({login, setLogin}) => {

  const handleLogin = () => {
    setLogin(!login);
  };

  return (
    <nav className="bg-gray-900 p-4 text-white w-full top-0 sticky">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl opacity-80 font-bold">Interview Journy🧩</div>
        <div className="space-x-8 opacity-75 text-xl flex items-center">
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>
          {/* <Link to="/companies" className="hover:text-blue-500">
            Companies
          </Link>
          <Link to="/roles" className="hover:text-blue-500">
            Roles
          </Link> */}
          {login ? (
            // Display user information if logged in
            <Link to={(login.uid).toString()} className="flex items-center space-x-2">
              <span>Welcome, {login.name}</span> {/* Replace with the user's name */}
              <img
                src="https://1fid.com/wp-content/uploads/2022/07/boy-anime-wallpaper-image-for-profile-pic-5.jpg" // Replace with user's profile image URL
                alt="User Profile"
                className="h-12 w-12 rounded-full"
              />
            </Link>
          ) : (
            // Display login button if not logged in
            <Link
                to='/login'
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
