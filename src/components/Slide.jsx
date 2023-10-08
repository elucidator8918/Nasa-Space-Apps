import React from "react";
import { motion } from "framer-motion";

export default function Slide() {
  return (
    <div className="z-1 mb-10 -mt-32">
      <div className="flex justify-center items-center">
        <a>
          <div className=" flex justify-center items-center w-5 h-10 rounded-3xl border-4 border-stone-50">
            <motion.div
              animate={{
                y: [-10, 8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-slate-50 flex justify-center items-center"
            />
          </div>
        </a>
      </div>
      <div className="py-12 sm:py-10">
        <div className=" mx-auto max-w-7xl px-6 lg:px-8">
          <div className=" sticky mx-auto max-w-2xl lg:text-center">
            <h2 className=" font-semibold text-xl  leading-7 text-cyan-500">
              Ease your life with Elaira Now!
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
              Welcome to the AI driven solution to improve your aerospace system. Let
              Elaira give recommendations for you.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our Mission is to create a one-stop tool
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-12 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="inline font-bold bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg">
                    <svg
                      className="h-7 w-7 text-teal-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                      />
                    </svg>
                  </div>
                  Specialized Insights
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-100">
                  A few clicks to get various insights on how to improve your
                  literary skills. Doesn't sound too bad, does it?
                </dd>
              </div>

              <div className="relative pl-16">
                <dt className="inline font-bold bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg ">
                    <svg
                      className="h-7 w-7 text-teal-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                  </div>
                  Secure Data
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-100">
                  Sit back, put your feet up while our state-of-the-art
                  algorithms secure your data.
                </dd>
              </div>

              <div className="relative pl-16">
                <dt className="inline font-bold bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg">
                    <svg
                      className="h-7 w-7 text-teal-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                  </div>
                  AI Driven Services
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-100">
                  State of the art Machine Learning algorithms to serve your
                  every need.
                </dd>
              </div>

              <div className="relative pl-16">
                <dt className="inline font-bold bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg ">
                    <svg
                      className="h-7 w-7 text-teal-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                      />
                    </svg>
                  </div>
                  Multi-factor Authentication
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-100">
                  Adds an extra layers of security by requiring users to provide
                  at least two types of credentials to access our
                  system/application.{" "}
                </dd>
              </div>
            </dl>
            {/* <div className='flex justify-center mt-8 mb-6'>
          <a href="#" className="absolute rounded-md border border-transparent bg-violet-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700 m-4">Get Started <span aria-hidden="true">&rarr;</span></a>
         </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
