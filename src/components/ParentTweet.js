import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { asyncToggleTweet } from "../actions/tweets";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { TiHeartOutline, TiHeartFullOutline } from "react-icons/ti";
import { BsCircleFill, BsShareFill } from "react-icons/bs";

const ParentTweet = ({
  parentTweet,
  tweet,
  userInfo,
  hasLiked,
  formatDate,
  toParent,
  setDisplay,
}) => {

  const state = useSelector((state) => state);
  const dispatch = useDispatch()
console.log(parentTweet.likes.includes(state.authedUser))
  const likeTweet = (e, id) => {
    e.preventDefault();
console.log(id)
    dispatch(
      asyncToggleTweet({
        id: tweet.parent.id,
        // likes: parentTweet.likes.includes(state.authedUser) ? parentTweet.likes.filter(tweet.id !== id) : parentTweet.likes.concat(state.authedUser),
        hasLiked: tweet.parent.hasLiked,
        authedUser: state.authedUser,
      })
    );
  };

  return (
    <div className="tweet">
      <img
        src={userInfo.avatarURL}
        alt={userInfo.name + "'s avatar"}
        className="avatar"
      />
      <div className="tweet-info">
        <div>
          <span>{userInfo.name}</span>
          <span>@{userInfo.authorID}</span>
          <BsCircleFill style={{ fontSize: "4px", margin: "3px" }} />
          <span className="time-span">{formatDate(parentTweet.timestamp)}</span>
          <div>
            {tweet.parent && (
              <button
                className="replying-to"
                onClick={(e) => toParent(e, tweet.parent.id)}
              >
                replying to @{tweet.parent.author}
              </button>
            )}
          </div>
          <p>{parentTweet.text}</p>
        </div>

        <div className="tweet-icons">
          <div className="icons">
            <FaRegComment
              style={{ fontSize: "22px", marginRight: "3px" }}
              className="tweet-icon"
              onClick={() => setDisplay(true)}
            />
            <span className="reply-span">
              {parentTweet.replies !== 0 && parentTweet.replies.length}
            </span>
          </div>
          <div className="icons">
            <AiOutlineRetweet className="tweet-icon" />
          </div>
          <div className="icons">
            {parentTweet.likes.includes(state.authedUser) ? (
              <TiHeartFullOutline
                color="#e0245e"
                className="tweet-icon"
                onClick={(e) => likeTweet(e,tweet.parent.id)}
              />
            ) : (
              <TiHeartOutline className="tweet-icon" onClick={(e) => likeTweet(e,tweet.parent.id)} />
            )}
            <span className="heart-span">
              {tweet.likes !== 0 && tweet.likes}
            </span>
          </div>
          <div className="icons">
            <BsShareFill style={{ fontSize: "20px" }} className="tweet-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentTweet;
