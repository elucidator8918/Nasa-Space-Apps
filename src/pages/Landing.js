import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Statement from "../components/Statement";
import Slide from "../components/Slide";

export default function Landing() {
  return (
    <div className="flex flex-col bg-gradient-to-r bg-cover bg-center from-gray-900 via-black to-gray-900 bg-full h-max p-8 no-scrollbar">
      <Navbar />
      <div className="flex-grow">

        <Statement />
        <Slide />
      </div>
    </div>
  );
}
