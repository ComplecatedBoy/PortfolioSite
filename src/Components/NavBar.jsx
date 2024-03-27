import React from "react";
import Button from "@mui/material/Button"
import { FaBars } from "react-icons/fa6";

function NavBar({setIsSideBar}) {
  return (
    <>
    <div style={{zIndex:"2"}} className=" fixed top-0 w-screen bg-stone-100 bg-[#e9f0f3] px-4 pe-8 p-2 shadow-md">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <div className="font-bold flex items-center flex-1 justify-between text-2xl">
          <div className="px-3">Satyam Kumar Shah</div>
          <div className="visible md:invisible" onClick={()=>setIsSideBar(true)}><FaBars></FaBars></div>
        </div>
        <div className="flex items-center gap-2  invisible w-0 md:visible md:w-auto ">
        <div >
            <a href="#home" className="hover:bg-black/10 p-2 px-6 active:bg-black/10">Home</a>
          </div>
          <div >
            <a href="#project" className="hover:bg-black/10 p-2 px-6 active:bg-black/10">Projects</a>
          </div>
          <div >
            <a href="#about"  className="hover:bg-black/10 p-2 px-6 active:bg-black/10">About</a>
          </div>
          <div >
            <a href="#contact" className="hover:bg-black/10 p-2 px-6 active:bg-black/10">Contact</a>
          </div>
          <div className="ms-8">
          <Button variant="outlined" href="" size="large" color="primary">Resume</Button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default NavBar
