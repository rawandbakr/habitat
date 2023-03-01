import React from "react";
import NavItem from "./NavItem";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import {GoSignOut} from "react-icons/go"

export default function Navigation(userDetails) {
  const user = userDetails.user;
  const logout = () => {
    window.open("http://localhost:8080/auth/logout", "_self");
  };
  return (
    <div className="flex flex-row bg-primary text-secondary rounded-bl-3xl rounded-tr-3xl m-2">
      {/* navigation menu */}
      <div className="flex flex-col w-full md:ml-8">
        <h1 className="flex justify-center pt-3"> HABITAT</h1>
        <div className="flex flex-row justify-center items-center  ">
          {/* profile section */}
          <div className="flex">
            {user ? (
              <div className="flex ">
                {/* profile section user name and proflie pic*/}
                <div className="flex md:flex-row flex-col justify-center items-center">
                  <h1 className="sm:text-sm font-bold text-black ml-1">
                    {" "}
                    welcome back {user.username}
                  </h1>
                  <img
                    src={user.thumbnail}
                    alt="profilepic"
                    className="ml-2 mb-1 rounded-full h-12 w-12"
                  />
                </div>
                <button onClick={logout}><GoSignOut/></button>
                <NavItem to="/posts" name="posts" />
              </div>
            ) : (
              <NavItem to="/login" name="login" />
            )}
          </div>
          {/* nav list section */}
          <li className="flex ">
            <NavItem to="/" name="Home" />
            <NavItem to="/studio" name="Studio" />
            <NavItem to="/blog" name="Blog" />
            <NavItem to="/contact" name="Contact" />
          </li>
        </div>
      </div>
      {/* socila media icons and links */}
      <div className="md:flex md:flex-col justify-center hidden md:visible mr-1 ">
        <a
          className="pb-4 pl-4 hover:rounded-xl hover:text-accent"
          href="https://www.facebook.com/">
          <BsFacebook />
        </a>
        <a
          className="pl-4 hover:rounded-xl hover:text-accent"
          href="https://www.instagram.com/">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
}
