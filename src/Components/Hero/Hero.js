import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/undraw_sharing_knowledge_03vp.svg";
const Hero = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-700">
      <div className="flex flex-col items-center justify-center md:flex md:flex-row md:justify-between md:items-center container mx-auto py-20 ">
        <div className="w-5/6 md:w-6/12 mb-12">
          <h1 className="title-font sm:text-5xl text-3xl mb-4 font-bold text-gray-900 dark:text-white ">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Gather
            </span>{" "}
            More{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Knowledge to&nbsp;
            </span>
            <br className="hidden md:inline-block" />
            Prepare yourself for the&nbsp;
            <br className="hidden md:inline-block" />
            next challenge
          </h1>
          <p className="mb-8 leading-relaxed dark:text-white">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center md:justify-start  items-center">
            <Link
              to="/courses"
              className="inline-flex text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-sky-800 dark:hover:bg-sky-900 border-0 py-2 px-6 rounded text-lg"
            >
              Explore
            </Link>
            <Link
              to="/login"
              className="inline-flex text-gray-700 bg-gray-100 hover:bg-gray-200 rounded text-lg py-2 px-6 ml-4"
            >
              Sign in Now
            </Link>
          </div>
        </div>
        <div className="w-5/6 md:w-6/12">
          <img
            src={heroImg}
            alt=""
            className="object-cover object-center rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
