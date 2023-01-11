import React from "react";
import { useSelector } from "react-redux";
import { formatTweet, formatDate } from "../utils/helpers";
import { TiArrowBackOutline } from "react-icons/ti";
import { TiHeartOutline } from "react-icons/ti";
import { TiHeartFullOutline } from "react-icons/ti";

const Tweet = ({ tweet }) => {
  const state = useSelector((state) => state);
  const parentTweet = useSelector((state) => state.tweets[tweet.replyingTo]);
  //   console.log(parentTweet)
  tweet = formatTweet(
    tweet,
    state.users[tweet.author],
    state.authedUser,
    parentTweet
  );
//   console.log(tweet);

  const {
    avatar,
    hasLiked,
    // id,
    likes,
    name,
    parent,
    replies,
    text,
    timestamp,
  } = tweet;

  const toParent = (e, id) => {
    e.preventDefault();
    console.log(id);
  };

  const likeTweet = (e) => {
    e.preventDefault();
    console.log("like");
  };

  return (
    <div className="tweet">
      <img src={avatar} alt={name + "'s avatar"} className="avatar" />
      <div className="tweet-info">
        <div>
          <span>{name}</span>
          <div>{formatDate(timestamp)}</div>
          {parent && (
            <button
              className="replying-to"
              onClick={(e) => toParent(e, parent.id)}
            >
              replying to @{parent.author}
            </button>
          )}
          <p>{text}</p>
        </div>

        <div className="tweet-icons">
          <TiArrowBackOutline className="tweet-icon" />
          <span>{replies !== 0 && replies}</span>
          <button className="heart-button" onClick={likeTweet}>
            {hasLiked ? (
              <TiHeartFullOutline color="#e0245e" className="tweet-icon" />
            ) : (
              <TiHeartOutline className="tweet-icon" />
            )}
          </button>
          <span>{likes !== 0 && likes}</span>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
