import React from "react";
import Tweet from "./Tweet";
import AddTweet from "./AddTweet";

const TweetList = ({ tweetsArr }) => {
  const orderedTweets = []
    .concat(tweetsArr)
    .sort((a, b) => b.timestamp - a.timestamp);

  return (
    <div className="middle-panel">
      <AddTweet />
      <ul style={{ marginTop: "0" }}>
        {orderedTweets.map((tweet) => (
          <li key={tweet.id}>
            <Tweet tweet={tweet} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TweetList;
