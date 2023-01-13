import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { asyncAddTweet } from "../actions/tweets";
import {IoCloseSharp} from "react-icons/io5"

const NewTweet = ({ setDisplay, id, hideReply }) => {
  const [reply, setReply] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setReply(e.target.value);
  };

  const replyTweet = (e) => {
    e.preventDefault();
    console.log(reply);
    dispatch(asyncAddTweet(reply, id));
    // setReply("");
    setDisplay(false);
  };



  const replyLeft = 280 - reply.length;

  return (
    <div className="reply-tweet">
      <IoCloseSharp onClick={hideReply} className="close-btn" />
      <form className="new-tweet" onSubmit={replyTweet}>
        <textarea
          placeholder="what's happening"
          value={reply}
          onChange={handleChange}
          className="reply"
          maxLength={280}
        />
        {replyLeft <= 100 && <div className="tweet-length">{replyLeft}</div>}
        <div className="add-icons center-btn">
          <button type="submit" disabled={reply === ""}>
            Chirp
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTweet;
