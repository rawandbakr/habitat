import React from 'react'
import {Link} from 'react-router-dom'

export default function BlogCard({post}) {
  return (
    
<div className="md:max-w-xs md:p-1 w-full">
    <div className="bg-primary shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
        <a href="#">
            <img className="rounded-t-lg" src={post.photo} alt=""/>
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="text-accent font-bold text-2xl tracking-tight mb-2">{post.title}</h5>
            </a>
            <p className=" font-thin mb-3">{post.ph}</p>
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
