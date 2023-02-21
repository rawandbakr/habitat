import React from "react";

export default function Home() {
  return (
    <div className=" bg-secondary min-h-screen min-w-screen flex flex-col">
      {/* main photo  */}
      <div>
        <img
          src={require("../imgs/img1.jpg")}
          alt="a"
          className="bg-center object-cover w-full rounded-3xl p-2 max-h-96"
        />
      </div>
      {/* about us section */}
      <div className="flex flex-col md:flex-row m-4 ">
        <div className="flex lg:w-1/2 md:w-1/3 flex-col md:mr-2 mb-3 ">
          <h1 className=" font-bold m-2">ABOUT US</h1>
          <br />
          <br />
          <p>
            Consequat excepteur adipisicing in enim fugiat enim excepteur sit
            commodo labore. Dolor consectetur
            <br />
            laboris est eiusmod. Aute elit ex cupidatat aliqua ex aute in
            excepteur pariatur consequat aliqua. Ut sunt laborum ut nisi.
          </p>
        </div>
        {/* some photos */}
        <div className="flex lg:w-1/2 md:w-2/3 md:justify-end">
          {/* some photos */}
          <img
            className=" rounded-md w-full"
            src={require("../imgs/img2.jpg")}
            alt="a"
          />
        </div>
      </div>
      {/*  OUR DESIGN PHILOSOPHY section*/}
      <div className="flex flex-col md:flex-row m-4 ">
        {/* some photos */}
        <div className="flex lg:w-1/2 md:w-2/3 md:justify-start">
          
          <img
            className=" rounded-md w-full"
            src={require("../imgs/img3.jpg")}
            alt="a"
          />
        </div>
        <div className="flex lg:w-1/2 md:w-1/3 flex-col md:ml-2">
          <h1 className=" font-bold m-2">OUR DESIGN PHILOSOPHY</h1>
          <br />
          <br />
          <p> 
            Consequat excepteur adipisicing in enim fugiat enim excepteur sit
            commodo labore. Dolor consectetur
            <br />
            laboris est eiusmod. Aute elit ex cupidatat aliqua ex aute in
            excepteur pariatur consequat aliqua. Ut sunt laborum ut nisi.
          </p>
        </div>
      </div>
    </div>
  );
}
