import React from "react";
import NavItem from "./NavItem";
import { BsFacebook, BsInstagram } from "react-icons/bs";

export default function Navigation() {
  return (
    <header className="flex flex-row bg-primary text-secondary">
      <div className="flex flex-col  w-11/12">
          <h1 className=" p-2 flex justify-center"> Website Name</h1>
          <nav className="flex justify-center items-center ">
            <NavItem to="/" name="Home" />
            <NavItem to="/portfolio" name="Studio" />
            <NavItem to="/blog" name="Blog" />
            <NavItem to="/contact" name="Contact" />
          </nav>
      </div>
      <div className="flex flex-col justify-center space-y-2">
        <a className=" pb-2 hover:rounded-xl hover:text-accent" 
        href="https://www.facebook.com/">
          <BsFacebook />
        </a>
        <a className=" pb-2 hover:rounded-xl hover:text-accent" 
        href="https://www.instagram.com/">
          <BsInstagram />
        </a>
      </div>
    </header>
  );
}
