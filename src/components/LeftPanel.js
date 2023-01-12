import React from "react";
import logo from "../assets/chirper.png";
import { RiHome7Fill, RiFileList2Line } from "react-icons/ri";
import { HiOutlineHashtag, HiOutlineMail } from "react-icons/hi";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsBookmarks } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { CgMoreO } from "react-icons/cg";

const LeftPanel = () => {
  const icons = [
    { icon: RiHome7Fill, text: "Home" },
    { icon: HiOutlineHashtag, text: "Explore" },
    { icon: IoNotificationsOutline, text: "Notifications" },
    { icon: HiOutlineMail, text: "Messages" },
    { icon: BsBookmarks, text: "Bookmarks" },
    { icon: RiFileList2Line, text: "Lists" },
    { icon: FiUser, text: "Profile" },
    { icon: CgMoreO, text: "More" },
  ];

  return (
    <div className="left-panel">
      <img src={logo} alt="chirper icon" />
      <div className="left-icons">
        {icons.map((icon, id) => (
          <div className="left-icon" key={id}>
            <icon.icon /> <span>{icon.text}</span>
          </div>
        ))}
      </div>
      <div className="add-icons">
        <button style={{ fontSize: "20px", width: "170px", marginTop: "10px" }}>
          Chirp
        </button>
      </div>
    </div>
  );
};

export default LeftPanel;
