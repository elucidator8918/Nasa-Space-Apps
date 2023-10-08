import React from "react";
import Threemodel from "./Threemodel";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Statement() {
  const flag = localStorage.getItem("flag");
  const navigate = useNavigate();
  return (
    <div className="overflow-hidden pt-6 sm:pt-18 no-scrollbar">
      <div className="mx-auto max-w-7xl px-10 lg:px-14">
        <div className="mx-auto grid max-w-2xl grid-cols-1  lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
          <div className="lg:pl-12 h-screen flex items-center justify-center pb-10">
            <div className="lg:max-w-lg">
              <p className="md:text-6xl font-bold flex justify-center items-center tracking-tight bg-gradient-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent text-9xl">
                Introducing Elaira
              </p>
              <dl className="mt-4 max-w-8xl space-y-6 text-base leading-7 text-slate-200 lg:max-w-none">
                <p className="md:text-lg font-bold flex  tracking-tight bg-gradient-to-r from-gray-300 to-gray-200 bg-clip-text text-transparent text-xl">
                  <Typewriter
                    words={["Elevating Aerospace Standards with Artifical Intelligence"]}
                    cursor
                    cursorStyle="."
                    loop={0}
                  />
                </p>
              </dl>
              <div className="flex mt-6">
                <button
                  className=" animate-bounce flex justify-center items-center text-sm font-bold leading-6 text-gray-100 text-bold py-3 px-12 bg-blue-500 hover:bg-blue-500 rounded-md transition-all duration-150 ease-in-out border-1"
                  onClick={() => {
                    if (!flag) {
                      navigate("/Assistant");
                    } else {
                      navigate("/Assistant");
                    }
                  }}
                >
                  Try our AI Assistant
                </button>
              </div>
            </div>
          </div>
          <Threemodel />
        </div>
      </div>
    </div>
  );
}
