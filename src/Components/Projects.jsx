import { SiSocketdotio } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { IoOpenOutline } from "react-icons/io5";
import { SiPassport } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

function Projects() {
  return (
    <div
      id="project"
      className="pt-16 md:pb-16 text-center min-h-screen bg-gradient-to-l
       from-[#679db492]
       to-[#b0c7d334]"
    >
      <div className="max-w-[1200px] mx-auto">
        <div>
          <h1 className=" text-center  tracking-wide  text-3xl md:text-4xl mb-2 font-bold uppercase">
            Projects
          </h1>
          <div className="bg-[#ff0000] w-8 h-[8px] rounded-full mx-auto"></div>
        </div>

        <div className="m-[10px]">
          <div
            id=""
            className="max-w-[1200px]  flex flex-col md:flex-row p-4 lg:p-8 mx-auto my-4 md:my-16 shadow-lg rounded-[15px] w-full bg-[#b0c7d3] bg-gradient-to-l
            from-[#679db492]
            to-[#b0c7d334]
          "
          >
            <div className=" w-full md:w-1/2 h-full rounded-5px">
              <a
                href="#"
                className="rounded-[5px] opacity-[.9] hover:opacity-[1]"
              >
                <video
                  src="/satyamChatApp.mp4"
                  className="rounded-[5px] w-full h-full"
                  onMouseOver={(e) => e.target.play()}
                  loop
                  onMouseOut={(e) => e.target.pause()}
                ></video>
              </a>
            </div>
            <div className="ms-[10px] md:w-1/2 md:ms-[1rem] flex flex-col text-left">
              <div>
                <div className="font-bold mt-2 md:mt-1   text-[22px] text-[#112A46ee] underline">
                  Chats : real time chat Application
                </div>
                <div className="text-[#112A46DD] mt-3 md:text-[1rem] text-justify">
                  Chat application with seamless communication. Powered by
                  React.js for a sleek user interface and Node.js for robust
                  backend functionality, featuring real-time messaging and
                  secure user authentication.
                </div>
                <div className="flex mt-3 flex-wrap gap-1">
                  <span className="border border-[#0f0012] px-2 rounded-[2px] shadow bg-[#e0cbc1] flex items-center gap-2">
                    <FaReact></FaReact> React JS{" "}
                  </span>
                  <span className="border border-[#0f0012] px-2 rounded-[2px] shadow bg-[#e0cbc1] flex items-center gap-2">
                    <FaNodeJs></FaNodeJs> Node JS{" "}
                  </span>
                  <span className="border border-[#0f0012] px-2 rounded-[2px] shadow bg-[#e0cbc1] flex items-center gap-2">
                    <SiExpress></SiExpress> Express.js{" "}
                  </span>
                  <span className="border border-[#0f0012] px-2 rounded-[2px] shadow bg-[#e0cbc1] flex items-center gap-2">
                    <SiMongodb />
                    MongoDB{" "}
                  </span>
                  <span className="border border-[#0f0012] px-2 rounded-[2px] shadow bg-[#e0cbc1] flex items-center gap-2">
                    <SiSocketdotio />
                    Socket.io{" "}
                  </span>
                </div>
              </div>
              <div className="flex flex-row gap-4 text-xl mt-2 lg:mt-4 font-bold  text-white">
                <button className="bg-red-500 hover:bg-red-400 px-4 py-1 tracking-widest">
                  {" "}
                  <a
                    href="https://github.com/ComplecatedBoy/Chat-App-Mern.git"
                    className="flex gap-2 items-center"
                  >
                    <LuGithub></LuGithub>CODE
                  </a>
                </button>
                <button className="bg-red-500 hover:bg-red-400 px-4 py-1 tracking-widest">
                  {" "}
                  <a
                    href="https://satyam-chat-app-mern.onrender.com/"
                    className="flex gap-2 items-center"
                  >
                    <IoOpenOutline></IoOpenOutline>VISIT
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div
            id=""
            className="max-w-[12000px] flex flex-col md:flex-row p-4 lg:p-8 mx-auto my-4 md:my-16 shadow-lg rounded-[15px] w-full bg-[#b0c7d3] bg-gradient-to-l
            from-[#679db492]
            to-[#b0c7d334]"
          >
            <div className=" md:order-2 md:ms-2 w-full md:w-1/2 h-full rounded-5px">
              <a href="#" className="rounded-[5px]">
                <video
                  src="/WanderLust-TourAndTravels.mp4"
                  className="rounded-[5px] w-full h-full opacity-[.9] hover:opacity-[1]"
                  onMouseOver={(e) => e.target.play()}
                  loop
                  muted
                  onMouseOut={(e) => e.target.pause()}
                ></video>
              </a>
            </div>
            <div className="ms-[10px] md:w-1/2 md:ms-[1rem] flex flex-col text-left">
              <div>
                <div className="font-bold mt-2 md:mt-1  text-[22px] text-[#112A46ee] underline">
                  WanderLust : book your destination.
                </div>
                <div className="text-[#112A46DD] mt-3 md:text-[1rem] text-justify">
                  Proudly deployed on Render, our dynamic platform offers
                  seamless user experiences, fortified by robust authentication
                  and streamlined RESTful operations on listings. Users can
                  contribute reviews effortlessly, elevating credibility and
                  enriching the overall user journey.
                </div>
                <div className="flex mt-3 flex-wrap gap-1">
                  <span className="border border-[#0f0012] px-2 rounded-[2px] shadow bg-[#e0cbc1] flex items-center gap-2">
                    <FaBootstrap></FaBootstrap> BootStrap{" "}
                  </span>
                  <span className="border border-[#0f0012] px-2 rounded-[2px] shadow bg-[#e0cbc1] flex items-center gap-2">
                    <FaNodeJs></FaNodeJs> Node JS{" "}
                  </span>
                  <span className="border border-[#0f0012] px-2 rounded-[2px] shadow bg-[#e0cbc1] flex items-center gap-2">
                    <SiExpress></SiExpress> Express.js{" "}
                  </span>
                  <span className="border border-[#0f0012] px-2 rounded-[2px] shadow bg-[#e0cbc1] flex items-center gap-2">
                    <SiMongodb />
                    MongoDB{" "}
                  </span>
                  <span className="border border-[#0f0012] px-2 rounded-[2px] shadow bg-[#e0cbc1] flex items-center gap-2">
                    <SiPassport />
                    Passport.js{" "}
                  </span>
                </div>
              </div>
              <div className="flex flex-row gap-4 text-xl mt-2 lg:mt-4 font-bold  text-white">
                <button className="bg-red-500 hover:bg-red-400 px-4 py-1 tracking-widest">
                  {" "}
                  <a
                    href="https://github.com/ComplecatedBoy/WanderLustProject.git"
                    className="flex gap-2 items-center"
                  >
                    <LuGithub></LuGithub>CODE
                  </a>
                </button>
                <button className="bg-red-500 hover:bg-red-400 px-4 py-1 tracking-widest">
                  {" "}
                  <a
                    href="https://wanderlust-ikxg.onrender.com/listings"
                    className="flex gap-2 items-center"
                  >
                    <IoOpenOutline></IoOpenOutline>VISIT
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div
            id=""
            className="max-w-[1200px] flex flex-col md:flex-row p-4 lg:p-8 mx-auto my-4 md:my-16 shadow-lg rounded-[15px] w-full bg-[#b0c7d3] bg-gradient-to-l
            from-[#679db492]
            to-[#b0c7d334]"
          >
            <div className=" w-full md:w-1/2 h-full rounded-5px">
              <a href="#" className="rounded-[5px]">
                <video
                  src="/SimonGame.mp4"
                  className="rounded-[5px] w-full h-full opacity-[.9] hover:opacity-[1]"
                  onMouseOver={(e) => e.target.play()}
                  loop
                  muted
                  onMouseOut={(e) => e.target.pause()}
                ></video>
              </a>
            </div>
            <div className="ms-[10px] md:w-1/2 md:ms-[1rem] flex flex-col text-left">
              <div>
                <div className="font-bold mt-2 md:mt-1  text-[22px] text-[#112A46ee] underline">
                  Simon Game : test your memory
                </div>
                <div className="text-[#112A46DD] mt-3 md:text-[1rem] text-justify">
                  An engaging electronic memory challenge, presenting players
                  with complex patterns of lights and sounds to replicate,
                  enhancing memory skills and providing hours of enjoyable
                  entertainment.
                </div>
                <div className="flex mt-3 flex-wrap gap-1">
                  <span className="border border-[#0f0012] px-2 rounded-[2px] shadow bg-[#e0cbc1] flex items-center gap-2">
                    <IoLogoJavascript></IoLogoJavascript> Javascript{" "}
                  </span>
                  <span className="border border-[#0f0012] px-2 rounded-[2px] shadow bg-[#e0cbc1] flex items-center gap-2">
                    <FaCss3></FaCss3> CSS{" "}
                  </span>
                  <span className="border border-[#0f0012] px-2 rounded-[2px] shadow bg-[#e0cbc1] flex items-center gap-2">
                    <FaHtml5 />
                    HTML{" "}
                  </span>
                </div>
              </div>
              <div className="flex flex-row gap-4 text-xl mt-2 lg:mt-4 font-bold  text-white">
                <button className="bg-red-500 hover:bg-red-400 px-4 py-1 tracking-widest">
                  {" "}
                  <a
                    href="https://github.com/ComplecatedBoy/Simon-Says-Game.git"
                    className="flex gap-2 items-center"
                  >
                    <LuGithub></LuGithub>CODE
                  </a>
                </button>
                <button className="bg-red-500 hover:bg-red-400 px-4 py-1 tracking-widest">
                  {" "}
                  <a
                    href="https://complecatedboy.github.io/Simon-Says-Game/"
                    className="flex gap-2 items-center"
                  >
                    <IoOpenOutline></IoOpenOutline>VISIT
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
