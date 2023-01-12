import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { formatTweet, formatDate } from "../utils/helpers";
import { asyncToggleTweet } from "../actions/tweets";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { TiHeartOutline, TiHeartFullOutline } from "react-icons/ti";
import { BsCircleFill, BsShareFill } from "react-icons/bs";
import NewTweet from "./NewTweet";

const Tweet = ({ tweet }) => {
  const state = useSelector((state) => state);
  const parentTweet = useSelector((state) => state.tweets[tweet.replyingTo]);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  //   console.log(parentTweet)
  tweet = formatTweet(
    tweet,
    state.users[tweet.author],
    state.authedUser,
    parentTweet
  );
  // console.log(tweet);

  const {
    avatar,
    hasLiked,
    id,
    likes,
    name,
    parent,
    replies,
    text,
    timestamp,
    authorID,
  } = tweet;

  const toParent = (e, id) => {
    e.preventDefault();
    console.log(id);
  };

  const likeTweet = (e) => {
    e.preventDefault();

    dispatch(
      asyncToggleTweet({
        id: id,
        hasLiked: tweet.hasLiked,
        authedUser: state.authedUser,
      })
    );
  };

  const showNewTweet = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <div className="tweet">
        <img src={avatar} alt={name + "'s avatar"} className="avatar" />
        <div className="tweet-info">
          <div>
            <span>{name}</span>
            <span>@{authorID}</span>
            <BsCircleFill style={{ fontSize: "4px", margin: "3px" }} />
            <span className="time-span">{formatDate(timestamp)}</span>
            <div>
              {parent && (
                <button
                  className="replying-to"
                  onClick={(e) => toParent(e, parent.id)}
                >
                  replying to @{parent.author}
                </button>
              )}
            </div>
            <p>{text}</p>
          </div>

          <div className="tweet-icons">
            <div className="icons">
              <FaRegComment
                style={{ fontSize: "22px", marginRight: "3px" }}
                className="tweet-icon"
                onClick={showNewTweet}
              />
              <span className="reply-span">{replies !== 0 && replies}</span>
            </div>
            <div className="icons">
              <AiOutlineRetweet className="tweet-icon" />
            </div>
            <div className="icons">
              {hasLiked ? (
                <TiHeartFullOutline
                  color="#e0245e"
                  className="tweet-icon"
                  onClick={(e) => likeTweet(e, tweet.id)}
                />
              ) : (
                <TiHeartOutline className="tweet-icon" onClick={likeTweet} />
              )}
              <span className="heart-span">{likes !== 0 && likes}</span>
            </div>
            <BsShareFill style={{ fontSize: "20px" }} className="tweet-icon" />
          </div>
        </div>
      </div>
      {visible && <NewTweet />}
    </div>
  );
};

export default Tweet;
