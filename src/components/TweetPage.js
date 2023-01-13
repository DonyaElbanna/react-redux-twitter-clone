import { useState } from "react";
import { useSelector } from "react-redux";
import Tweet from "./Tweet";
import { TiArrowBack } from "react-icons/ti";
import { Navigate, useParams } from "react-router-dom";

const TweetPage = () => {
  const state = useSelector((state) => state);
  const tweetID = useParams().id;
  let tweetReplies = !state.tweets[tweetID]
    ? []
    : state.tweets[tweetID].replies.sort(
        (a, b) => state.tweets[b].timestamp - state.tweets[a].timestamp
      );
  // console.log(tweetID);

  const [toHome, setToHome] = useState(false);

  const goHome = () => {
    setToHome(true);
  };

  if (toHome === true) {
    return <Navigate to="/" />;
  }

  return (
    <div className="tweet-page">
      <Tweet tweet={state.tweets[tweetID]} />
      {tweetReplies.length !== 0 && <h3 className="center">Replies</h3>}
      <ul>
        {tweetReplies.map((replyID) => (
          <li key={replyID}>
            <Tweet tweet={state.tweets[replyID]} />
          </li>
        ))}
      </ul>
      <div>
        <TiArrowBack onClick={goHome} className="home-btn" />
      </div>
    </div>
  );
};

export default TweetPage;
