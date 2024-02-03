import React from "react";
import html from "../assets/html.png";
import css from "../assets/Css.png";
import js from "../assets/js.png";
import react from "../assets/Reactc.png";
import mysql from "../assets/mysql.png";
import nodejs from "../assets/nodejs.png";
import Github from "../assets/github.png";
import Bootstrap from "../assets/bootstrap.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-800",
    },
    {
      id: 3,
      src: js,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "REACT",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: mysql,
      title: "MYSQL",
      style: "shadow-white",
    },
    {
      id: 6,
      src: nodejs,
      title: "NODE.JS",
      style: "shadow-green-400",
    },
    {
      id: 7,
      src: Github,
      title: "Githhub",
      style: "shadow-gray-800",
    },
    {
      id: 8,
      src: Bootstrap,
      title: "BootStrap",
      style: "shadow-purple-500",
    },
  ];
  return (
    <div
      name="experience"
      className="w-full h-screen bg-gradient-to-r from-cyan-500 to-blue-500"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-6xl p-2 font-bold inline border-b-8  border-cyan-800 ">
            Experience
          </p>
          <p className="py-6 text-2xl font-light">
            These are the technologies I've worked with
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-110 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto h-auto " />
              <p className="mt-4 font-bold text-2xl font-styling">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
