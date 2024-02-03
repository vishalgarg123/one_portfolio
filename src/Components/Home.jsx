import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import HeroImage from "../assets/vmv.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <div
        name="Home"
        className="h-screen w-full bg-gradient-to-r from-cyan-500 to-blue-500"
      >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-7xl font-bold text-1xl font-styling">
              I'm a Full Stack Developer👋
            </h2>
            <p
              className="text-black-500 py-4 font-semibold
          max-w-md text-2xl" 
            >
              I have 2 years of experience building and desing software
              currently, i love to work on web application using technologies
              like react, tailwindcss,nodejs and mongodb
            </p>
            <div>
              <Link
                to="portfolio"
                className="text-white w-fit px-6 py-6 my-2 flex items-center rounded-md bg-gradient-to-r from-gray-500 to-gray-700"
              >
                Portfolio
                <span className="hover:rotate-45 duration-300 ml-2">
                  <FaLocationArrow size={20} />
                </span>
              </Link>
            </div>
          </div>
          <div >
            <img
              className="rounded-full mx-auto w-3/1 drop-shadow-2xl shadow-lg shadow-gray-900 "
              src={HeroImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
