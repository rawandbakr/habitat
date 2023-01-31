import React from 'react'

export default function BlogCard() {
  return (
    
<div className="max-w-xs p-1">
    <div className="bg-primary shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
        <a href="#">
            <img className="rounded-t-lg" src={require("../imgs/img1.jpg")} alt=""/>
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="text-accent font-bold text-2xl tracking-tight mb-2">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p className=" font-thin mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a className="text-primary bg-accent hover:bg-opacity-80 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                Read more
            </a>
        </div>
    </div>
</div>
  )
}
