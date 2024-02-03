import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-r from-cyan-500 to-blue-500"
    >
      <div className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-6xl font-bold inline border-b-8 border-cyan-800 ">
            About
          </p>
        </div>
        <p className="text-2xl mt-20 font-semibold">
          Greetings! I'm a passionate Full Stack Developer with a love for
          crafting efficient, innovative, and user-centric digital experiences.
          I thrive in dynamic environments where I can apply my diverse skill
          set to solve complex problems and contribute to the success of
          projects and With a solid foundation in both front-end and back-end
          technologies, I specialize in creating seamless, end-to-end solutions.
          My proficiency includes: HTML, CSS, JavaScript ,reactjs ,CSS
          Frameworks (Bootstrap, Tailwind CSS) ,expressjs,nodejs,mongodb and
          Github.
        </p>
        <br />
        <p className="text-2xl font-semibold">
          I'm always open to new challenges and collaborations. Whether you're
          looking for a dedicated Full Stack Developer or want to discuss
          potential projects, feel free to [provide contact information]. Let's
          connect and create something extraordinary together! Thank you for
          visiting my portfolio. I look forward to the opportunity of working
          with you.
        </p>
      </div>
    </div>
  );
};

export default About;
