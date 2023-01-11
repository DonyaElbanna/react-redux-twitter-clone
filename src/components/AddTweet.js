import React from "react";
import {
  AiOutlinePicture,
  AiOutlineFileGif,
  AiOutlineCalendar,
} from "react-icons/ai";
import { BsTextLeft } from "react-icons/bs";
import {HiOutlineEmojiHappy} from "react-icons/hi"
const AddTweet = () => {
  return (
    <div>
      <h2 className="center">Home</h2>
      <div className="tweet">
        <img
          src="https://i.postimg.cc/K8Zzmdzj/1.jpg"
          alt="avatar"
          className="avatar"
        />
        <div className="tweet-info">
          <div>
            <div style={{ fontSize: "18px", marginTop: "14px" }}>
              What's happening?{" "}
            </div>
          </div>
          <div className="add-tweet">
            <div className="add-icons">
              <AiOutlinePicture className="add-icon" />
              <AiOutlineFileGif className="add-icon" />
              <BsTextLeft className="add-icon" />
              <HiOutlineEmojiHappy className="add-icon" />
              <AiOutlineCalendar className="add-icon" />
            </div>
            <div className="add-icons">
              <button>Chirp</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTweet;
