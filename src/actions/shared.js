import { getInitialData } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveTweets } from "./tweets";
import { setAuthedUser } from "./authedUser";
// import { showLoading, hideLoading } from 'react-redux-loading-bar'

const authedID = "tylermcginnis";

export function handleInitialData() {
  return (dispatch) => {
    // dispatch(showLoading())
    return getInitialData().then(({ users, tweets }) => {
      dispatch(setAuthedUser(authedID));
      dispatch(receiveUsers(users));
      dispatch(receiveTweets(tweets));
      // dispatch(hideLoading())
    });
  };
}
