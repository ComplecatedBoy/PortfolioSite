import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@mui/material";
import { RiContactsLine } from "react-icons/ri";
import { GrProjects } from "react-icons/gr";
import { FaForward } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Link from "./Link.jsx"

function Hero() {
  return (
    <div id="home"
      className="pt-16 w-screen h-screen text-center bg-gradient-to-l
    from-[#679db492]
    to-[#b0c7d334]"
    >
      <div className="p-8 pt-2 md:pt-8 max-w-[1200px] mx-auto w-fulltext-white h-full">
        <div className="flex text-left flex-col md:flex-row justify-center items-center">
          <div className="w-44 h-44 md:w-96 md:h-96  rounded-full overflow-hidden border-4 border-[#679db4] me-8">
            <img
              src="./satyam.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-[black] self-start mt-3 md:mt-16">
            <h1 className="font-bold text-4xl md:text-6xl text-center md:text-left md:ms-4">
              Full Stack{" "}
              <TypeAnimation
                sequence={["Engineer", 1000, "Developer", 1000]}
                wrapper="span"
                speed={300}
                className="text-red-600"
                repeat={Infinity}
              />
            </h1>

            <div className="max-w-[700px] leading-[1.25rem] mt-4 font-normal text-black/50 text-normal md:text-xl md:m-4">
           A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product.
            </div>
            <Link/>
            <div className="flex flex-col w-full text-center md:flex-row  md:ms-4 mt-8 gap-4 ">
              <Button
               href="#project"
                variant="contained"
                startIcon={<GrProjects color="text-red-600"></GrProjects>}
                style={{
                    borderRadius: 0,
                    fontWeight:700,
                    letterSpacing:"1px",
                    padding: "12px 24px",
                    fontSize: "16px",
                    zIndex:"1"
                  }}
              >
                Projects
                <FaArrowRight className=" ms-8 "></FaArrowRight>
              </Button>
              <Button
              href="#contact"
                variant="contained"
                style={{
                  borderRadius: 0,
                  backgroundColor: "#121212fd",
                  fontWeight:700,
                  letterSpacing:"1px",
                  padding: "12px 24px",
                  fontSize: "16px",
                }}
                startIcon={<RiContactsLine color="#fffedd"></RiContactsLine>}
              >
                Contact
                <FaArrowRight className=" ms-8 "></FaArrowRight>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
