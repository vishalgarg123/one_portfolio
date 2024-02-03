import React from "react";
import { RiKakaoTalkFill } from "react-icons/ri";

const Contacts = () => {
  return (
    <div name="contact" className="w-full h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-6xl font-bold inline border-b-8 border-cyan-800">Contact</p>
          <p className="py-6 text-2xl font-light">Submit the Form to get in touch with me</p>
        </div>
        <div>
          <form action="https://formspree.io/f/xyyreejp" method="POST" className="flex flex-col w-full md:1/2 ">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="p-2 bg-transparent border-2 rounded-md  focus:outline-none placeholder-gray-900"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="p-2 bg-transparent border-2 rounded-md  focus:outline-none placeholder-gray-900"
            />
            <textarea
              name="message"
              placeholder="Enter your Message"
              rows="10"
              className="p2 bg-transparent border-4 rounded-mg focus:outline-none placeholder-gray-900 "
            ></textarea>
              <button className="text-white w-fit px-6 py-3 my-8 mx-auto flex items-center rounded-full bg-gradient-to-r from-gray-500 to-gray-700 hover:scale-125 duration-300">
                Let's 
                <span className=" ml-2">
                  <RiKakaoTalkFill size={30} />
                </span>
              </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
