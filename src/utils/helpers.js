export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  return time;
  // .substr(0, 5) + " " + time.slice(-2)
  // + " | " + d.toLocaleDateString();
}

export function formatTweet(tweet, author, authedUser, parentTweet) {
  const { id, likes, replies, text, timestamp } = tweet;
  const { name, avatarURL, authorID } = author;

  return {
    name,
    id,
    authorID,
    timestamp,
    text,
    avatar: avatarURL,
    likes: likes.length,
    replies: replies.length,
    hasLiked: likes.includes(authedUser),
    parent: !parentTweet
      ? null
      : {
          author: parentTweet.author,
          id: parentTweet.id,
        },
  };
}
