import React from "react";
import logo from "../assets/chirper.png";
import { FiSearch } from "react-icons/fi";

const LeftPanel = () => {
  return (
    <div className="right-panel">
      <div className="wrapper">
        <FiSearch className="search-icon" />
        <input className="input" placeholder="Search Chirper"></input>
      </div>
      {/* <FiSearch/></input> */}
      <h3>What's happening</h3>
      <div className="card">
        <div>
          <div>Title here</div>
          <div>some text here oh lala</div>
        </div>
        <img src={logo} alt="pic" />
      </div>
      <div className="card">
        <div>
          <div>Title here</div>
          <div>some text here oh lala</div>
        </div>
        <img src={logo} alt="pic" />
      </div>
      <div className="card">
        <div>
          <div>Title here</div>
          <div>some text here oh lala</div>
        </div>
        <img src={logo} alt="pic" />
      </div>
    </div>
  );
};

export default LeftPanel;
