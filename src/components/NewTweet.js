import React, { useState } from "react";

const NewTweet = ({ setDisplay }) => {
  const [reply, setReply] = useState("");

  const handleChange = (e) => {
    setReply(e.target.value);
  };

  const newTweet = (e) => {
    e.preventDefault();
    console.log(reply);
    setReply("");
    setDisplay(false);
  };

  const replyLeft = 280 - reply.length;

  return (
    <div>
      <form className="new-tweet" onSubmit={newTweet}>
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
