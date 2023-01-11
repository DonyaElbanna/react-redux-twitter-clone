import { getInitialData } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveTweets } from "./tweets";
import { setAuthedUser } from "./authedUser";

const authedID = "tylermcginnis";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, tweets }) => {
      dispatch(setAuthedUser(authedID));
      dispatch(receiveUsers(users));
      dispatch(receiveTweets(tweets));
    });
  };
}
