import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  return (
    <div className="  sg:flex flex-col top-[35%]  left-45 fixed  ">
      <ul>
        <li className="flex justify-between items-center w-40 h-16 px-4 ml-[-100px]  hover:ml-[-10px] hover:rounded-r-lg duration-300 bg-cyan-700">
          <a
            href="https://www.linkedin.com/in/vishal-1sdfasf23/"
            target="_blank"
            className="flex justify-between items-center w-full text-black font-bold"
          >
            <>
              Linkedin <FaLinkedin size={35} />
            </>
          </a>
        </li>
        <li className="flex justify-between items-center w-40 h-16 px-4 ml-[-100px]  hover:ml-[-10px] hover:rounded-r-lg duration-300 bg-cyan-700">
          <a
            href="https://github.com/vishalgarg123"
            target="_blank"
            className="flex justify-between items-center w-full text-black font-bold"
          >
            <>
              Github <FaGithub size={35} />
            </>
          </a>
        </li>
        <li className="flex justify-between items-center w-40 h-12 px-4 ml-[-100px]  hover:ml-[-10px] hover:rounded-r-lg duration-300 bg-cyan-700">
          <a
            href="mailto:gargv4384@gmail.com"
            target="_blank"
            className="flex justify-between items-center w-full text-black font-bold"
          >
            <>
              Email <MdOutlineMail size={35} />
            </>
          </a>
        </li>
        <li className="flex justify-between items-center w-40 h-12 px-4 ml-[-100px]  hover:ml-[-10px] hover:rounded-r-lg duration-300 bg-cyan-700">
          <a
            href="/vg_resume.pdf"
            download
            className="flex justify-between items-center w-full text-black font-bold"
          >
            <>
              Resume <BsFillPersonLinesFill size={35} />
            </>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
