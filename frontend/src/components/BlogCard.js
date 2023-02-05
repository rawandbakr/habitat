import React from 'react'
import {Link} from 'react-router-dom'

export default function BlogCard() {
  return (
    
<div className="md:max-w-xs md:p-1 w-full">
    <div className="bg-primary shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
        <a href="#">
            <img className="rounded-t-lg" src={require("../imgs/img2.jpg")} alt=""/>
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="text-accent font-bold text-2xl tracking-tight mb-2">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p className=" font-thin mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <Link to='/blog/:id'>
            <a className="text-primary bg-accent hover:bg-opacity-80 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                Read more
            
            </a>
            </Link>
        </div>
    </div>
</div>
  )
}
