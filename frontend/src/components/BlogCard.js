import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  return (
    <div className="md:max-w-xs md:p-1 w-full">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-primary">
        <Link to={post._id}>
          <img
            className="rounded-t-lg w-full h-52 object-cover scale-90 hover:scale-110"
            src={post.photo}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{post.title}</div>
            <p className="text-gray-700 text-base">{post.ph}</p>
          </div>
        </Link>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
    </div>
  );
}
