import React from "react";
import logo from "../assets/chirper.png";
import { RiHome7Fill, RiFileList2Line } from "react-icons/ri";
import { HiOutlineHashtag, HiOutlineMail } from "react-icons/hi";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsBookmarks } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { CgMoreO } from "react-icons/cg";

const LeftPanel = () => {
  return (
    <div className="left-panel">
      <img src={logo} alt="chirper icon" />
      <div className="left-icons">
        <div className="left-icon">
          <RiHome7Fill />
          <span>Home</span>
        </div>
        <div className="left-icon">
          <HiOutlineHashtag /> <span>Explore</span>
        </div>
        <div className="left-icon">
          <IoNotificationsOutline /> <span>Notifications</span>
        </div>
        <div className="left-icon">
          <HiOutlineMail /> <span>Messages</span>
        </div>
        <div className="left-icon">
          <BsBookmarks /> <span>Bookmarks</span>
        </div>
        <div className="left-icon">
          <RiFileList2Line /> <span>Lists</span>
        </div>
        <div className="left-icon">
          <FiUser /> <span>Profile</span>
        </div>
        <div className="left-icon">
          <CgMoreO /> <span>More</span>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
