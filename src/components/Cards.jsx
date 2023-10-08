import React, { Component } from "react";
import Tilt from "react-parallax-tilt";
import img from "../assets/web.png";
import img1 from "../assets/mobile.png";
import img2 from "../assets/creator.png";

const Cards = () => {
  return (
    <div className="mb-10">
      <div className="mt-5 mx-auto flex flex-wrap gap-10 justify-center items">
        <Tilt className="">
          <div className="bg-gradient-to-r from-purple-700 to-blue-900 rounded-[20px] py-16 px-6 flex justify-evenly items-center flex-col group">
            <p className="font-bold max-w-m text-white"> Comp-Sci Major </p>
            <img src={img} className="w-16 h-16 mt-1" />
          </div>
        </Tilt>
        <Tilt className="">
          <div className="bg-gradient-to-r from-purple-700 to-blue-900 rounded-[20px] py-16 px-6 flex justify-evenly items-center flex-col group">
            <p className="font-bold text-white"> React Developer </p>
            <img src={img1} className="w-16 h-16 mt-1" />
          </div>
        </Tilt>
        <Tilt className="">
          <div className="bg-gradient-to-r from-purple-700 to-blue-900 rounded-[20px] py-16 px-6 flex justify-evenly items-center flex-col group">
            <p className="font-bold  text-white">AI/ML Developer</p>
            <img src={img2} className="w-16 h-16 mt-1" />
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default Cards;
