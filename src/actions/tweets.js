import { saveLikeToggle, saveTweet } from "../utils/api";
export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_TWEET = "TOGGLE_TWEET";
export const ADD_TWEET = "ADD_TWEET";
export const DELETE_TWEET = "DELETE_TWEET";

export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets,
  };
}

function addTweet(tweet) {
  return {
    type: ADD_TWEET,
    tweet,
  };
}

function toggleTweet({ id, authedUser, hasLiked }) {
  return {
    type: TOGGLE_TWEET,
    id,
    authedUser,
    hasLiked,
  };
}

export function deleteTweet({id}) {
  return {
    type: DELETE_TWEET,
    id,
  }
}

export function asyncAddTweet(text, replyingTo) {
  return (dispatch, getState) => {
    const {authedUser} = getState();
    // console.log(getState())
    return saveTweet({ text, author: authedUser, replyingTo })
      .then((tweet) => dispatch(addTweet(tweet)))
      .catch((e) => {
        alert("An error occured, try again.");
      });
  };
}

export function asyncToggleTweet(info) {
  return (dispatch) => {
    dispatch(toggleTweet(info));

    return saveLikeToggle(info).catch((e) => {
      console.warn("Error in asynToggleTweet: ", e);
      dispatch(toggleTweet(info));
      alert("An error occured, try again.");
    });
  };
}
