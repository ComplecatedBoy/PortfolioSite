import React from "react";
import Footer from "./Footer.jsx";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <div
      id="contact"
      className="pt-16 w-screen text-center overflow-hidden  bg-gradient-to-br from-[#679db492] to-[#b0c7d334] flex flex-col justify-between"
    >
      <div className="max-w-[1200px] w-full sm:py-16  mx-auto text-start p-8 mb-16">
        <div>
          <h1 className="uppercase text-4xl font-semibold font-serif tracking-wider text-red-500/90">
            Contact
          </h1>
          <p className="text-xl text-stone-800">Feel free to reach out!👇</p>
        </div>
        <div className="flex flex-col md:flex-row mt-3 md:mt-12 lg:space-x-4 gap-y-4">
          <div className="flex text-base font-mono text-dark  md:text-xl tracking-wide">
            <span className="text-red-500  text-xl md:text-3xl flex items-center justify-center me-1">
              {" "}
              <FaMapLocationDot style={{ display: "inline block" }} />
            </span>
            Bhopal MadhyaPradesh, India
          </div>
          <div className="flex text-base font-mono md:text-xl tracking-wide text-dark">
            <span className="text-red-500 text-xl md:text-3xl flex items-center justify-center me-1">
              {" "}
              <MdEmail style={{ display: "inline block" }} />
            </span>
            Satyamshah1234567890@gmail.com
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
