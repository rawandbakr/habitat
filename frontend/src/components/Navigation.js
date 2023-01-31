import React from "react";
import NavItem from "./NavItem";
import { BsFacebook, BsInstagram } from "react-icons/bs";

export default function Navigation() {
  return (
    <div className="flex flex-row bg-primary text-secondary rounded-b-3xl ">
      <div className="flex flex-col w-11/12">
          <h1 className="flex justify-center pt-3"> Website Name</h1>
          <li className="flex justify-center items-center ">
            <NavItem to="/" name="Home" />
            <NavItem to="/studio" name="Studio" />
            <NavItem to="/blog" name="Blog" />
            <NavItem to="/contact" name="Contact" />
          </li>
      </div>
      <div className="flex flex-col justify-center">
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
