import React from "react";

function About() {
  const skills = [
    "REACT JS",
    "MONGODB",
    "NODE JS",
    "EXPRESS JS",
    "FRONTEND",
    "BACKEND",
    "JAVASCRIPT",
    "CSS",
    "HTML",
    "JAVA AND DSA",
    "DATA STRUCTURE AND ALGORITHMS",
  ];
  const others = [
    "BOOTSTRAP",
    "TAILWIND CSS",
    "MATERIAL UI",
    "MONGOOSE",
    "SQL",
    "MYSQL",
    "WEB DEVELOPMENT",
    "FULL STACK DEVELOPMENT",
  ];
  return (
    <>
      <div
        id="about"
        className="w-screen  h-auto mx-auto pt-16   bg-gradient-to-l
    from-[#679db492]
    to-[#b0c7d334]"
      >
        <div className="max-w-[1200px] p-8 mx-auto w-full h-full">
          <div>
            <h1 className=" text-center  tracking-wide md:tracking-widest  text-3xl md:text-4xl mb-2 font-bold uppercase">
              About Me
            </h1>
            <div className="bg-[#ff0000] w-8 h-[8px] rounded-full mx-auto"></div>
          </div>
          <div className="flex flex-col items-center md:items-start md:flex-row justify-center gap-8 h-full">
            <div className="flex-1 flex-col mt-4 md:mt-16">
              <h1 className="font-semibold text-2xl md:text-3xl text-stone-800/90 hidden md:block mb-8">
                Let's Get to know me!
              </h1>
              <p className="text-normal md:text-lg text-stone-700/80 text-justify">
                {" "}
                Hey! I'm{" "}
                <span className=" font-bold underline text-red-800">
                  Satyam Kumar Shah
                </span>
                , a{" "}
                <span className="bold text-stone-900 font-bold underline">
                  {" "}
                  22-year-old full-stack software engineer
                </span>{" "}
                passionate about crafting high-quality digital solutions.
                Proficient in HTML, CSS, JavaScript, React.js, Java, and with a
                solid understanding of{" "}
                <span className="bold text-stone-800 font-bold underline">
                  {" "}
                  Data Structures and Algorithms
                </span>
                , I excel at delivering seamless user experiences and efficient
                backend solutions. I also have expertise in the{" "}
                <span className="text-blue-900 font-bold underline">
                  MERN (MongoDB, Express.js, React.js, Node.js) stack
                </span>
                . Let's bring your projects to life together!
              </p>
            </div>
            <div className="flex-1 flex-col hidden lg:visible mt-1 md:mt-16">
              <h1 className="font-semibold text-2xl md:text-3xl text-stone-800/80 mb-1 md:mb-8 text-center md:text-start">
                Skills
              </h1>
              <div className="flex flex-row flex-wrap">
                {skills.map((skill) => {
                  return (
                    <div className="text-sm md:text-normal px-2 py-1  border-2 text-black/60 border-stone-700 me-2 my-1 hover:bg-black hover:text-stone-100 hover:border-transparent">
                      {skill}
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-row flex-wrap">
                {others.map((skill) => {
                  return (
                    <div className=" text-sm md:text-normal px-2 py-1 text-black/70 border-2 border-stone-700 me-2 my-1 hover:bg-black hover:text-stone-100 hover:border-transparent">
                      {skill}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
