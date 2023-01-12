import React from "react";
import {
  AiOutlinePicture,
  AiOutlineFileGif,
  AiOutlineCalendar,
} from "react-icons/ai";
import { BsTextLeft } from "react-icons/bs";
import { HiOutlineEmojiHappy, HiOutlineSparkles } from "react-icons/hi";
const AddTweet = () => {
  return (
    <div>
      <div className="tweet home">
        <div>
          <h2>Home</h2>
          <HiOutlineSparkles className="icon" />
        </div>
        <div className="tweet">
          <img
            src="https://tylermcginnis.com/would-you-rather/tyler.jpg"
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
    </div>
  );
};

export default AddTweet;
