import {
  RECEIVE_TWEETS,
  TOGGLE_TWEET,
  ADD_TWEET,
  DELETE_TWEET,
} from "../actions/tweets";

export default function tweets(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...state,
        ...action.tweets,
      };
    case ADD_TWEET:
      const { tweet } = action;

      let replyingTo = {};
      if (tweet.replyingTo !== null) {
        replyingTo = {
          [tweet.replyingTo]: {
            ...state[tweet.replyingTo],
            replies: state[tweet.replyingTo].replies.concat([tweet.id]),
          },
        };
      }
      return {
        ...state,
        [action.tweet.id]: action.tweet,
        ...replyingTo,
      };
    case TOGGLE_TWEET:
      console.log([action.id], state[action.id]);
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          likes:
            action.hasLiked === true
              ? state[action.id].likes.filter(
                  (uid) => uid !== action.authedUser
                )
              : state[action.id].likes.concat([action.authedUser]),
        },
      };

    case DELETE_TWEET:
      let newState = Object.values(state).filter(
        (tweet) => tweet.id !== action.id
      );

      // let newReplies = state[state[action.id].replyingTo].replies.filter((reply) => reply !== action.id)

      const convertArrayToObject = (array, key) => {
        const initialValue = {};
        return array.reduce((obj, item) => {
          return {
            ...obj,
            [item[key]]: item,
          };
        }, initialValue);
      };

      let parentTweetID = state[action.id].replyingTo
        ? state[action.id].replyingTo
        : null;
      let parentTweet = state[parentTweetID];
      console.log(
        "deleted ID: ",
        action.id,
        "parentTweet ID: ",
        parentTweetID,
        "parentTweet: ",
        parentTweet
      );
      state = convertArrayToObject(newState, "id");

      if (!parentTweetID) {
        return { ...state };
      } else {
        return {
          ...state,
          [parentTweetID]: {
            ...state[parentTweetID],
            replies:
              parentTweetID && state[parentTweetID].replies.includes(action.id)
                ? state[parentTweetID].replies.filter(
                    (reply) => reply !== action.id
                  )
                : state[parentTweetID],
          },
        };
      }
    default:
      return state;
  }
}
