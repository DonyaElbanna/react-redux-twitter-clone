import React from "react";
import Tweet from "./Tweet";
// import { useSelector } from "react-redux";
import AddTweet from "./AddTweet";

const TweetList = ({ tweetsArr }) => {
  //   const tweets = useSelector((state) => state.tweets);
  const orderedTweets = []
    .concat(tweetsArr)
    .sort((a, b) => b.timestamp - a.timestamp);

  return (
    <div>
      <AddTweet />
      <ul>
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
