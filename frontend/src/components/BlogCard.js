import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  return (
    <div className="md:max-w-xs md:p-1 w-full">
      <div className="bg-primary shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
        <img className="rounded-t-lg" src={post.photo} alt="" />
        <div className="p-5">
          <h1 href="#">
            <h5 className="text-accent font-bold text-2xl tracking-tight mb-2">
              {post.title}
            </h5>
          </h1>
          <p className=" font-thin mb-3">{post.ph}</p>
          <Link to={post._id}>
            <h1
              className="text-primary bg-accent hover:bg-opacity-80 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
              href="#">
              Read more
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
