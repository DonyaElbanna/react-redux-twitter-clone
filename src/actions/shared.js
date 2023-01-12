import { getInitialData } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveTweets } from "./tweets";
import { receiveNews } from "./news";
import { receiveProfiles } from "./profiles";
import { setAuthedUser } from "./authedUser";

const authedID = "tylermcginnis";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, tweets, news, profiles }) => {
      dispatch(setAuthedUser(authedID));
      dispatch(receiveUsers(users));
      dispatch(receiveTweets(tweets));
      dispatch(receiveNews(news));
      dispatch(receiveProfiles(profiles))
    });
  };
}
