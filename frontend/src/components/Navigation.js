import React from "react";
import NavItem from "./NavItem";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { GoSignOut } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Navigation(userDetails) {
  const user = userDetails.user;
  const logout = () => {
    window.open("http://localhost:8080/auth/logout", "_self");
  };
  return (
    <div className="flex flex-row bg-primary text-secondary rounded-bl-3xl rounded-tr-3xl m-2">
       {/* profile section */}
       <div className="md:flex justify-center items-center hidden md:visible ">
            {user ? (
              <div className="flex">
                {/* profile section user name and proflie pic*/}
                <div className="flex md:flex-col flex-row justify-center items-center">
                  <h1 className="sm:text-sm font-bold text-black ml-1">
                    {" "}
                    welcome back {user.name}
                  </h1>
                  <img
                    src={user.thumbnail}
                    alt="profilepic"
                    className="ml-2 mb-1 rounded-full h-12 w-12"
                  />
                </div>
                <button onClick={logout}>
                  <GoSignOut />
                </button>
                {user&&user.role==='admin'?<NavItem to="/posts" name="posts" />:<></>}
              </div>
            ) : (
              <></>
            )}
       </div>
      {/* navigation menu on bigscreen*/}
      <div className="md:flex md:flex-col w-full md:ml-8 hidden md:visible">
        {/* habitat text and profile  */}
        <div className="flex justify-center pt-3">
            <Link className="flex justify-center items-center" to="/">HABITAT</Link>
        </div>
        {/* navigation menu */}
        <div className="flex flex-row justify-center items-center">
          <li className="flex ">
            <NavItem to="/" name="Home" />
            <NavItem to="/studio" name="Studio" />
            <NavItem to="/blog" name="Blog" />
            <NavItem to="/contact" name="Contact" />
          </li>
        </div>
      </div>
      {/* socila media icons and links */}
      <div className="md:flex md:flex-col justify-center hidden md:visible mr-4 ">
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
      {/* habitat on small screen */}
      <div className="flex justify-end items-center ml-4 w-full  visble md:hidden">
         <h1 className="flex justify-center items-center">
           <Link to="/">HABITAT</Link>{" "}
         </h1>
       </div>
       {/* navigation bar on small screen*/}
       <div className="flex justify-end items-center mr-1 p-5 w-full visble md:hidden">
      <GiHamburgerMenu/>
      </div>
    </div>
  );
}
