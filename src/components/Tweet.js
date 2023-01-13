import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { formatTweet, formatDate } from "../utils/helpers";
import { asyncToggleTweet } from "../actions/tweets";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { TiHeartOutline, TiHeartFullOutline } from "react-icons/ti";
import { BsCircleFill, BsShareFill } from "react-icons/bs";
import NewTweet from "./NewTweet";
import HideReply from "./HideReply";
import ParentTweet from "./ParentTweet";

const Tweet = ({ tweet }) => {
  const state = useSelector((state) => state);
  const parentTweet = useSelector((state) => state.tweets[tweet.replyingTo]);
  const dispatch = useDispatch();

  const [displayParentTweet, setDisplayParentTweet] = useState(false);
  const [userInfo, setUserInfo] = useState("");
  //   console.log(parentTweet)
  tweet = formatTweet(
    tweet,
    state.users[tweet.author],
    state.authedUser,
    parentTweet
  );
  // console.log(tweet);

  // const formattedParentTweet = formatTweet(parentTweet, state.users[author],
  //   state.authedUser,)

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
    let userInfo = state.users[parentTweet.author];
    console.log(parentTweet, state.users[parentTweet.author]);
    setDisplayParentTweet(!displayParentTweet);
    setUserInfo(userInfo);
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

  const hideReply = () => {
    setDisplay(false);
  };

  const { ref, display, setDisplay } = HideReply(false);

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
                onClick={() => setDisplay(true)}
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
            <div className="icons">
              <BsShareFill
                style={{ fontSize: "20px" }}
                className="tweet-icon"
              />
            </div>
          </div>
        </div>
      </div>
      <div ref={ref}>
        {display && (
          <>
            <NewTweet setDisplay={setDisplay} id={id} hideReply={hideReply} />
          </>
        )}
      </div>
      {displayParentTweet && (
        <ParentTweet
          parentTweet={parentTweet}
          formatDate={formatDate}
          toParent={toParent}
          setDisplay={setDisplay}
          likeTweet={likeTweet}
          userInfo={userInfo}
          tweet={tweet}
        />
      )}
    </div>
  );
};

export default Tweet;
