import { useState } from "react";
import NavItem from "./NavItem";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { GoSignOut } from "react-icons/go";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Navigation(userDetails) {
  const [toggle, setToggle] = useState(false);
  const navitems = [
    {
      id: "/",
      title: "Home",
    },
    {
      id: "/about",
      title: "About",
    },
    {
      id: "/contact",
      title: "Contact",
    },
    {
      id: "/blog",
      title: "Blog",
    },
  ];

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
          <Link className="flex justify-center items-center" to="/">
            HABITAT
          </Link>
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
                <button
                  className="hover:shadow-2xl hover:border-r-2 hover:rounded-xl hover:text-accent"
                  onClick={logout}>
                  <GoSignOut />
                </button>
                {user && user.role === "admin" ? (
                  <NavItem to="/posts" name="posts" />
                ) : (
                  <></>
                )}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      {/* socila media icons and links */}
      <div className="md:flex md:flex-col justify-center md:visible hidden">
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
      {/* navigation bar on small screen*/}
      <div className="h-10 w-11/12 flex flex-auto justify-between items-center p-2 md:hidden">
        <Link to="/">HABITAT</Link>
        {toggle ? (
          <RiCloseLine onClick={() => setToggle(false)} />
        ) : (
          <RiMenu3Fill onClick={() => setToggle(true)} />
        )}
        {toggle ? (
          <div className=" absolute justify-center top-[80px] right-5 w-fit  h-max p-5 flex z-10 bg-white backdrop-blur bg-opacity-30 rounded-lg">
            {/* navigation menu */}
            <ul className="flex flex-col space-y-3">
              {navitems.map((navit) => {
                return (
                  <li
                    key={navit.title}
                    onClick={() => setToggle(false)}
                    className="hover:bg-black rounded-lg hover:bg-opacity-20 w-fit text-center text-black">
                    <NavItem to={navit.id} name={navit.title} />
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
