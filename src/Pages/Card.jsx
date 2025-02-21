import React from 'react'
import {FaGithub,FaLinkedinIn} from "react-icons/fa6";
import { MdOutlineWorkHistory } from "react-icons/md";
import profile from "../assets/logo.jpg";
import { SiGmail } from "react-icons/si";
  

const Card = () => {
  return (
    <div className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] h-auto bg-[#279bda] rounded-[20px] grid grid-cols-1 md:grid-cols-2 p-4">
        {/* Profile Image */}
        <div className="col-span-1 flex justify-center items-center">
          <img
            className="w-[60%] sm:w-[70%] md:w-[90%] h-auto  rounded-tl-[40px] rounded-br-[40px] rounded-bl-[10px] rounded-tr-[10px]"
            src={profile}
            alt="Profile"
          />
        </div>
  
        {/* Profile Details */}
        <div className="col-span-1 flex flex-col justify-center items-center md:items-start gap-4 p-4">
          <h1 className="text-[22px] sm:text-[24px] md:text-[26px] font-bold text-center md:text-left">
            SANJAY NAGARAJAN
          </h1>
          <div className="flex items-center gap-2">
            <MdOutlineWorkHistory size={26} />
            <p className="font-medium text-[12px] sm:text-[14px] md:text-[16px]">
              MERN Stack Developer
            </p>
          </div>
          <p className="text-[13px] sm:text-[15px] md:text-[15px] font-medium text-center md:text-left">
            💻 MERN Stack Developer | Java | Python | 🏫 Learning Artificial Intelligence & AWS Cloud Computing
          </p>
  
          {/* Social Media Icons */}
          <div className="flex gap-3">
            
            <a href="https://github.com/sanjay-1505/">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/sanjaynagarajan1505/">
              <FaLinkedinIn size={24} />
            </a>
            <a href="mailto:nsanjay1505@gmail.com">
              <SiGmail size={24} />
            </a>
          </div>
        </div>
      </div>
  )
}

export default Card