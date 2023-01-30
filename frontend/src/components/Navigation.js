import React from "react";
import NavItem from "./NavItem";

export default function Navigation() {
  return (
    <div className=" m-4 h-28 border-black border-dashed border-2 flex flex-col">
      <h1 className=" p-2 flex justify-center"> Website Name</h1>
      <br></br>
      <div className="grid grid-cols-5">
        <nav className="flex justify-around col-span-4">
            <NavItem to='/' name='Home'/>
            <NavItem to='/Portfolio' name='Portfolio'/>
            <NavItem to='/blog' name='blog'/>
            <NavItem to='/contact' name='contact'/>
        </nav>
        <div className="flex justify-center items-end flex-col pr-4 pb-4 col-span-1">
          <a >fb</a>
          <a >ig</a>
        </div>
      </div>
    </div>
  );
}
