import React from 'react';
import { LiaInstagram } from "react-icons/lia";
import { LiaLinkedin } from "react-icons/lia";
import { LiaGithub } from "react-icons/lia";



function Footer() {
    return ( <div className='bg-[#0f0f0fdd] flex md:text-xl flex-col text-white/80 items-center justify-center'>
        <div className=' py-8 flex flex-col md:flex-row items-center justify-center md:justify-between mx-auto max-w-[1200px] w-full h-full font-light tracking-wide'>
           <div className='py-4'>Made with <span style={{color:"crimson"}}>❤</span> by Satyam Kumar Shah</div>
           <div className='pb-4 flex flex-row gap-2 md:gap-4 text-[30px]'>
           <a href="https://github.com/ComplecatedBoy" target='_blank' className='bg-[#323232] p-2  rounded-full hover:bg-[#444444]  transition hover:translate-y-[-5px]  '><LiaGithub /></a>   
           <a href="https://www.instagram.com/111s.atyam/" target='_blank' className='bg-[#323232] p-2  rounded-full hover:bg-[#444444]  transition hover:translate-y-[-5px]  '><LiaInstagram/></a>   
           <a href="https://www.linkedin.com/in/satyamkumarshah/" target='_blank' className='bg-[#323232] p-2  rounded-full hover:bg-[#444444]  transition  hover:translate-y-[-5px] '><LiaLinkedin/></a> 
           </div>
        </div>

    </div>);
}

export default Footer;