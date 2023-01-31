import React from "react";

export default function Home() {
  return (
    <div className=" bg-secondary min-h-screen min-w-screen flex flex-col">
      {/* main photo  */}
      <div>
        <img
          src={require("../imgs/img1.jpg")}
          alt="a"
          className=" object-cover h-full w-full"
        />
      </div>
      {/* about us section */}
      <div className="flex flex-row m-4">
        <div className="flex w-1/3 flex-col ">
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
        <div className="flex w-2/3 justify-end">
          {/* some photos */}
          <img
            className=" rounded-md"
            src={require("../imgs/img2.jpg")}
            alt="a"
          />
        </div>
      </div>
      {/*  OUR DESIGN PHILOSOPHY section*/}
      <div className="flex flex-row m-4">
        
        <div className="flex w-2/3">
          {/* some photos */}
          <img
            className=" rounded-md"
            src={require("../imgs/img3.jpg")}
            alt="a"
          />
        </div>
        <div className="flex w-1/3 flex-col ">
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
