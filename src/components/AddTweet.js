import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { asyncAddTweet } from "../actions/tweets";
import {
  AiOutlinePicture,
  AiOutlineFileGif,
  AiOutlineCalendar,
} from "react-icons/ai";
import { BsTextLeft } from "react-icons/bs";
import { HiOutlineEmojiHappy, HiOutlineSparkles } from "react-icons/hi";

const AddTweet = () => {
  const [tweet, setTweet] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTweet(e.target.value);
  };
  const addTweet = (e) => {
    e.preventDefault();
    console.log(tweet);
    setTweet("");
    dispatch(asyncAddTweet(tweet));
  };

  const tweetLeft = 280 - tweet.length;

  return (
    <div>
      <div className="tweet home">
        <div className="header">
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
              <textarea
                className="textarea"
                placeholder="What's happening?"
                value={tweet}
                onChange={handleChange}
                maxLength={280}
              />
              {tweetLeft <= 100 && (
                <div className="tweet-length-home">{tweetLeft}</div>
              )}
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
                <button onClick={addTweet}>Chirp</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTweet;
