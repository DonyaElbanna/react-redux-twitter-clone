import { combineReducers } from "redux";
import authedUser from "./authedUser";
import users from "./users";
import tweets from "./tweets";
import news from "./news";
import profiles from "./profiles";

export default combineReducers({ authedUser, users, tweets, news, profiles });
