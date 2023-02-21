import React from 'react'
import {FcGoogle} from 'react-icons/fc'

export default function Login() {
  const google = () => {
    window.open("http://localhost:4000/auth/google", "_self");
  };
  return (
    <div className="bg-secondary min-h-screen min-w-screen  flex justify-center items-center m-1">
      <h1 className="">Choose a Login Method</h1>
      <div className="flex ">
        <div className="left">
          <button className=' bg-primary flex w-20 h-5 rounded justify-center items-center'  onClick={google}>
          <FcGoogle/> sign in
          </button>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        {/* <div className="right">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button className="submit">Login</button>
        </div> */}
      </div>
    </div>
  );
};
