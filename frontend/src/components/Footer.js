import React from 'react'
import { BsFacebook, BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-black text-white flex flex-col md:flex-row p-4 text-sm justify-around ">
      {/* newsletter section */}
      <div className=' flex flex-col'>
        <h5>NEWSLETTER</h5>
        <form className='flex flex-col'>
          <div className='flex flex-row w-44 '>
          <input placeholder="NAME:" type="text" className='m-2 bg-black outline-none border-b-2 rounded-br-lg' />
          <input placeholder="EMAIL:"type="email" className='m-2 bg-black outline-none border-b-2 rounded-br-lg'/> 
          </div>
          <button type="submit" className='text-left text-xl font-bold text-white hover:bg-white hover:text-black w-20 hover:rounded p-1'>SUBMIT</button>
        </form>
        <br/>
        <br/>
        <p className='text-xs opacity-30 md:m-0 mb-3'>COPYRIGHT © 2023 website name DESIGNS INC. ALL RIGHTS RESERVED.</p>
      </div>
      {/* contact section */}
      <div className=' flex  flex-row md:flex-col justify-between '>
        <div className='flex flex-col justify-center'>
        <h1>CONTACT US</h1>
        <a href="mailto:email@gmail.com">email@gmail.com</a>
        <a href="tel:964000000">+964000000</a>
        </div>
        <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row items-start">
          <a
            className="pr-2 hover:rounded-xl hover:text-accent"
            href="https://www.facebook.com/">
            <BsFacebook />
          </a>
          <a
            className=" pr-2 hover:rounded-xl hover:text-accent"
            href="https://www.instagram.com/">
            <BsInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
