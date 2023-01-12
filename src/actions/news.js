export const RECEIVE_NEWS = "RECEIVE_NEWS";

export function receiveNews(news) {
  return {
    type: RECEIVE_NEWS,
    news,
  };
}
