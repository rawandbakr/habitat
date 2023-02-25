import React, { useState,useEffect } from "react";
import { useDispatch ,useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { createPost,getposts,removePost } from "../actions/posts";

export default function Posts(userDetails) {
  const user = userDetails.user;
  const dispatch = useDispatch();
  const posts= useSelector((state) => state.posts.value)

  useEffect(() => {
    dispatch(getposts());
  },[dispatch]);  

  const [postData, setPostData] = useState({
    title: "",
    photo: "",
    pharaghrap: "",
  });
  const [error, setError] = useState(null);

  const clearForm = () => {
    setPostData({
      title: "",
      photo: "",
      pharaghrap: "",
    });
  }
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        dispatch(createPost(postData));
        window.alert("posted succesfully ");
      } catch (e) {
        setError(e);
      }
      clearForm();
    };

    return (
      <div className="m-2 p-2">
        <div>
          <h1>{user.username}</h1>
          <img src={user.thumbnail} alt="profile" />
          <h1>{user.email}</h1>
        </div>
        {/* posting section */}
        <div className="">
          <form
            onSubmit={handleSubmit}
            className="bg-primary p-4 rounded-lg flex flex-col justify-around">
            <label className="">
              title:
            </label>
            <input
                className=" flex w-1/3 rounded-md outline-none"
                type="text"
                value={postData.title}
                onChange={(e) =>
                  setPostData({ ...postData, title: e.target.value })
                }
              />
            <label className="formLabel">
            pharaghrap:
            </label>
            <input
                className=" flex w-1/3 rounded-md outline-none"
                type="text"
                value={postData.pharaghrap}
                onChange={(e) =>
                  setPostData({ ...postData, pharaghrap: e.target.value })
                }
              />
            <label className="formLabel">
              photo:
            </label>
            <FileBase
                type="file"
                className=" flex w-1/3 rounded-md outline-none"
                multiple={false}
                onDone={({ base64 }) =>
                  setPostData({ ...postData, photo: base64 })
                }
              />
            <button
              type="submit"
              className="  bg-neutral-400 flex justify-center w-24 rounded-md mt-1">
              Add Post
            </button>
            {error && <div className=" text-red-600">{error}</div>}
          </form>
        </div>
        {/* // Content Management section  */}
        <div className="container mx-auto py-10">
          <h1 className="text-3xl font-bold mb-5">Content Management</h1>
          <table className="w-full text-left table-collapse">
            <thead>
              <tr>
                <th className="text-sm font-semibold text-gray-700 p-2 bg-gray-100">
                  ID
                </th>
                <th className="text-sm font-semibold text-gray-700 p-2 bg-gray-100">
                  Title
                </th>
                <th className="text-sm font-semibold text-gray-700 p-2 bg-gray-100">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>

            {posts &&
          posts.map((post) => (
            <tr key={post._id}
            className="border-t hover:bg-gray-200">
                <td className="p-2">{post._id}</td>
                <td className="p-2">{post.title}</td>
                <td className="p-2">
                  {/* <a href="#" className="text-blue-500 hover:underline">
                    Update
                  </a> */}
                  <button
                  onClick={()=> dispatch(removePost(post._id))}
                  className="text-red-500 hover:underline ml-4">
                    Delete
                  </button>
                </td>
              </tr>

          ))}


              {/* <tr className="border-t hover:bg-gray-200">
                <td className="p-2">1</td>
                <td className="p-2">Example Title 1</td>
                <td className="p-2">
                  <a href="#" className="text-blue-500 hover:underline">
                    Update
                  </a>
                  <a href="#" className="text-red-500 hover:underline ml-4">
                    Delete
                  </a>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

