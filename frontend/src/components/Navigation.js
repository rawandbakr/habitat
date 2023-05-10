import {useState} from "react";
import NavItem from "./NavItem";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { GoSignOut } from "react-icons/go";
import { FcMenu,FcMinus } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Navigation(userDetails) {
  const [toggle, setToggle] = useState(false);

  const user = userDetails.user;
  const logout = () => {
    window.open("http://localhost:8080/auth/logout", "_self");
  };
  return (
    <div className="flex flex-row bg-primary text-secondary rounded-bl-3xl rounded-tr-3xl m-2 z-20">
      {/* navigation menu on bigscreen*/}
      <div className="md:flex md:flex-col w-full md:ml-8 hidden md:visible ">
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
                 {/* profile section */}
       <div className="md:flex md:flex-row justify-center items-center hidden md:visible ">
            {user ? (
              <div className="flex">
                {/* profile section user name and proflie pic*/}
                <div className="flex md:flex-row flex-row justify-center items-center">
                  <h1>|</h1>
                  <h1 className="sm:text-sm font-bold text-black ml-1">
                    welcome back {user.name}
                  </h1>
                  <img
                    src={user.profilePhoto}
                    alt="userPhoto"
                    className="ml-2 mr-2 rounded-full h-12 w-12"
                  />
                </div>
                <button className="hover:shadow-2xl hover:border-r-2 hover:rounded-xl hover:text-accent" onClick={logout}>
                  <GoSignOut />
                </button>
                {user&&user.role==='admin'?<NavItem to="/posts" name="posts" />:<></>}
              </div>
            ) : (
              <></>
            )}
       </div>
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
       <div className="md:hidden flex flex-col
         justify-end items-center">
            {toggle ? <FcMinus onClick={() => setToggle(!toggle)}/> : <FcMenu onClick={() => setToggle(!toggle)}/>}
        <div className={`${!toggle ? "hidden" : "flex"}
           z-10 absolute top-10 bg-primary bg-opacity-90 rounded-xl right-0 left-0`}>
            <ul className="flex justify-end items-start">
          <li className="flex flex-col" onClick={() => {setToggle(!toggle)}}>
            <NavItem  to="/studio" name="Studio" />
            <NavItem to="/" name="Home" />
            <NavItem to="/blog" name="Blog" />
            <NavItem to="/contact" name="Contact" />
          </li>
          </ul>
            {/* profile section */}
       <div className="flex justify-end items-start">
            {user ? (
              <div className="flex">
                {/* profile section user name and proflie pic*/}
                <div className="flex md:flex-row flex-row justify-center items-center">
                  <h1>|</h1>
                  <h1 className="sm:text-sm font-bold text-black ml-1">
                    welcome back {user.name}
                  </h1>
                  <img
                    src={user.profilePhoto}
                    alt="userPhoto"
                    className="ml-2 mr-2 rounded-full h-12 w-12"
                  />
                </div>
                <button onClick={() => {setToggle(!toggle)}} className="hover:shadow-2xl hover:border-r-2 hover:rounded-xl hover:text-accent" onClick={logout}>
                  <GoSignOut onClick={() => {setToggle(!toggle)}} />
                </button>
                {user&&user.role==='admin'?<NavItem to="/posts" name="posts" />:<></>}
              </div>
            ) : (
              <></>
            )}
       </div>
        </div>
      </div>
    </div>
  );
}
