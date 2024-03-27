import React from "react";
import Footer from "./Footer.jsx"
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


function Contact() {
  return (
    <div
      id="contact"
      className="pt-16 w-screen h-screen text-center  bg-gradient-to-l from-[#679db492] to-[#b0c7d334] flex flex-col justify-between">
        <div className="max-w-[1200px] w-full h-full md:px-60 md:py-26 mx-auto text-start p-16">
            <div>
             <h1 className="font-bold uppercase text-2xl tracking-wider text-red-500/90">Contact</h1>
            <p className="text-xl text-stone-800">Feel free to reach out!👇</p>
            </div>
            <div className="flex flex-col md:flex-row mt-3 md:mt-12 gap-4">
            <div className="flex text-lg font-bold tracking-wide text-stone-800"><span className="text-red-400 text-3xl flex items-center justify-center me-3"> <FaMapLocationDot style={{display:"inline block"}} /></span>Bhopal,MadhyaPradesh,India</div>
            <div className="flex text-lg font-bold tracking-wide text-stone-800"><span className="text-red-400 text-3xl flex items-center justify-center me-3"> <MdEmail style={{display:"inline block"}} /></span>satyamshah1234567890@gmail.com</div>
            </div>
           
        </div>
        
        <Footer/>
    </div>
  );
}

export default Contact;
