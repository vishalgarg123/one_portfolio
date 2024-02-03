import React from "react";
import p1 from "../assets/img1.png";
import p2 from "../assets/img2.png"
import p3 from "../assets/img3.png"

import p4 from "../assets/img4.jpg"

import p5 from "../assets/img5.jpg"

import p6 from "../assets/img6.jpeg"


import { TbSourceCode } from "react-icons/tb";

const Portfolio = () => {
const portfolios=[
  {
    id:1,
    src: p1,
    href :"https://github.com/vishalgarg123/Movie_app",
    title: "Moviex"
  },
  {
    id:2,
    src: p2,
    href :"https://github.com/vishalgarg123/Expense_Managment_system",
    title: "EMS",
  },{
    id:3,
    src: p3,
    href :"https://github.com/vishalgarg123/ecommerce_website",
    title: "Shopping"
  },{
    id:4,
    src: p4,
    href :"https://github.com/vishalgarg123/Flight_enquiry_system",
    title: "Flight ES"
  },{
    id:5,
    src: p5,
    href :"https://github.com/vishalgarg123/puzzle_game-using-c-",
    title: "puzzle Game"
  },{
    id:6,
    src: p6,
    href :"",
    title: "weather"
  }


]

  return (
    <div name="portfolio" className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-6xl font-bold inline border-b-8 border-cyan-800">
            Portfolio
          </p>
          <p className="py-6 text-2xl font-light">Check out some of my work right here </p>
         
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({id,src,href,title})=>(
            <div key={id} className="shadow-md shadow-cyan-800 rounded-lg">
              <div className="flex items-center justify-center text-2xl font-bold bg-transparent  m-2 hover:scale-125  duration-300">
               {title}
              </div>
            <img
              src={src}
              alt=""
              className="rounded-md duration-200 hover:scale-110 h-44 w-44 mb-5 mx-auto"
            />
            <div className="flex items-center justify-center text-1xl font-semibold bg-gradient-to-r from-cyan-600 to bg-gray-400 text-white ">
              <button  className="rounded-full w-1/2 m-4 duration-200 hover:scale-125">
                <a href={href} target="_blank">Source Code</a>
                
              </button>
              <span className="pl-2">
              <TbSourceCode size={30} />
              </span>
            </div>
          </div>

          ))}
          
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
