import React from "react";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaPrint } from "react-icons/fa";
import profilePicture from '../assets/profile-picture.png';

const CustomCard = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  }

  return (
    <div className="relative h-3/5 w-3/4 bg-cc_bg rounded-large p-8">
      {/* IMAGE */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* <img src={profilePicture} alt="Ayan Picture" className="rounded-3xl" /> */}
      </div>

      {/* UPPER RIGHT */}
      <div className="absolute top-0 right-0 min-h-20 w-20 bg-background rounded-bl-large customCard_tr flex flex-col gap-4 items-center justify-center p-4 pt-0 pr-0">
        <div className="w-16 h-16 bg-button_bg rounded-full cursor-pointer flex items-center justify-center hover:bg-cc_bg group drop-shadow-xl">
          <FaPrint className="text-icon group-hover:text-background" size={40} />
        </div>
      </div>

      {/* LOWER RIGHT */}
      <div className="absolute bottom-0 left-0 min-h-20 w-20 bg-background rounded-tr-large customCard_tr flex flex-col gap-4 items-center justify-between p-4 pb-0 pl-0">
        <div 
          onClick={() => openInNewTab("https://github.com/monteverol")}
          className="w-16 h-16 bg-button_bg rounded-full cursor-pointer flex items-center justify-center hover:bg-cc_bg group drop-shadow-xl">
          <FaGithub className="text-icon group-hover:text-background" size={40} />
        </div>

        <div 
          onClick={() => openInNewTab("https://leetcode.com/u/monteverol/")}
          className="w-16 h-16 bg-button_bg rounded-full cursor-pointer flex items-center justify-center hover:bg-cc_bg group drop-shadow-xl">
          <SiLeetcode className="text-icon group-hover:text-background" size={40} />
        </div>
      </div>
    </div>
  );
}

export default CustomCard;