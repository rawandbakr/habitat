import React from 'react'
<<<<<<< HEAD
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
=======

export default function Login() {
  return (

  <div class="w-full max-w-sm mx-auto mt-20">
    <form>
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 font-medium mb-2" for="email">
            Email
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email"/>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 font-medium mb-2" for="password">
            Password
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password"/>
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Sign In
          </button>
        </div>
      </div>
    </form>
  </div>


  )
}
>>>>>>> 315bcb18b63e5724d4f2730407a0fb5bbb48239a
