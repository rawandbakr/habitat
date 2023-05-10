import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  return (
    <div className="md:max-w-xs md:p-1 w-full">
      <div className="relative bg-primary shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 ">
        <Link to={post._id}>
          <img
            className="rounded-t-lg w-full h-52 object-cover scale-90 hover:scale-110"
            src={post.photo}
          />
          <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-accent opacity-70">
            <h3 className="text-xl text-primary font-bold">{post.title}</h3>
            <p className="mt-2 text-sm text-gray-300">{post.ph}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
