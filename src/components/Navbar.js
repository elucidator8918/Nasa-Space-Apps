import React from "react";
import favicon from "./favicon.ico"; // Update the path as needed

export default function Navbar() {
  return (
    <div className="flex flex-row static">
      <header className="absolute inset-x-0 top-7.5 z-50 bg-gradient-to-r from-blue-1000 to blue-1100">
        <nav
          className="flex items-center justify-between p-2 mb-1 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1 items-center">
            <img
              src={favicon}
              alt="Favicon"
              className="h-12 w-12 mr-4 rounded-full"
            />
            <a
              href="/"
              className="text-white text-xl festive-font"
            >
              Elaira
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-1 justify-end">
            <div className="flex gap-x-12">
              <a
                href="/"
                className="text-md font-semibold leading-6 text-gray-200 hover:font-extrabold hover:shadow-xl transition-all ease-in duration-100 p-2 rounded-lg"
              >
                Home
              </a>
              <a
                href="Assistant"
                className="text-md font-semibold leading-6 text-gray-200 hover:font-extrabold hover:shadow-xl transition-all ease-in duration-100 p-2 rounded-lg"
              >
                Assistant
              </a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
