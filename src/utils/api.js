import {
  _getUsers,
  _getTweets,
  _getNews,
  _getProfiles,
  _saveLikeToggle,
  _saveTweet,
} from "./_DATA.js";

export function getInitialData() {
  return Promise.all([
    _getUsers(),
    _getTweets(),
    _getNews(),
    _getProfiles(),
  ]).then(([users, tweets, news, profiles]) => ({
    users,
    tweets,
    news,
    profiles,
  }));
}

export function saveLikeToggle(info) {
  return _saveLikeToggle(info);
}

export function saveTweet(info) {
  return _saveTweet(info);
}
