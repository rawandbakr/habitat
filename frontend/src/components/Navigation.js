import React from "react";
import NavItem from "./NavItem";
import { BsFacebook, BsInstagram } from "react-icons/bs";

export default function Navigation() {
  return (
    <div className="flex flex-row bg-primary text-secondary rounded-bl-3xl rounded-tr-3xl m-2">
      {/* navigation menu */}
      <div className="flex flex-col w-full md:ml-8">
          <h1 className="flex justify-center pt-3"> Website Name</h1>
          <li className="flex justify-center items-center ">
            <NavItem to="/" name="Home" />
            <NavItem to="/studio" name="Studio" />
            <NavItem to="/blog" name="Blog" />
            <NavItem to="/contact" name="Contact" />
          </li>
      </div>
      {/* socila media icons and links */}
      <div className="md:flex md:flex-col justify-center hidden md:visible mr-1 ">
        <a className="pb-4 pl-4 hover:rounded-xl hover:text-accent" 
        href="https://www.facebook.com/">
          <BsFacebook />
        </a>
        <a className="pl-4 hover:rounded-xl hover:text-accent" 
        href="https://www.instagram.com/">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
}
