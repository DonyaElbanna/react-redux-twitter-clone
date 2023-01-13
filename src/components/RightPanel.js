import { useState } from "react";
import { FiSearch, FiSettings } from "react-icons/fi";
import { BsCircleFill } from "react-icons/bs";
// import { useSelector } from "react-redux";

const LeftPanel = () => {
  // const news = useSelector((state) => state.news);

  // const profiles = useSelector((state) => state.profiles);
  // console.log(profilesArr);

  const [news] = useState({
    CNN: {
      author: "CNN",
      name: "Trending",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh9l9SbzYclF9PV47K4xqR-Ozi8BsMHaeViw&usqp=CAU",
      title: "The Hubble Space Telescope",
      text: "may have solved a new mystery",
      hashtag: "#Astrophysics",
    },
    Entertainment: {
      author: "Entertainment",
      name: "LIVE",
      image: null,
      title: "#TheNuggetsShow",
      text: "2,000 chirps",
      hashtag: null,
    },
    BBC: {
      author: "BBC",
      name: "Trending",
      image:
        "https://ichef.bbci.co.uk/news/976/cpsprodpb/10AB3/production/_128257286_gettyimages-1455580067.jpg.webp",
      title: "Storms relentless",
      text: "as California drenching goes on",
      hashtag: null,
    },
    worldwide: {
      author: "Worldwide ",
      name: "Trending",
      image: null,
      title: "#WorldNews",
      text: "125K Chirps",
      hashtag: "5,049 people are chirping about this",
    },
  });

  const newsArr = Object.values(news);

  const [profiles] = useState({
    userOne: {
      name: "John Doe",
      avatar: "https://i.postimg.cc/K8Zzmdzj/1.jpg",
      handle: "@john_doe",
    },
    userTwo: {
      name: "Cendy Baker",
      avatar: "https://i.postimg.cc/cJz4MCct/3.jpg",
      handle: "@cendyyall",
    },
    userThress: {
      name: "Donya E",
      avatar: "https://i.postimg.cc/25ySZhnf/2.jpg",
      handle: "@jonoco",
    },
  });

  const profilesArr = Object.values(profiles);

  return (
    <div className="right-panel">
      <div className="wrapper">
        <FiSearch className="search-icon" />
        <input className="input" placeholder="Search Chirper"></input>
      </div>
      <div className="card-wrapper">
        <h3>Trends for you</h3>
        <FiSettings className="card-icon" />
        {newsArr.map((newsItem, id) => (
          <div className="card" key={id}>
            <div>
              <span>{newsItem.author}</span>
              <BsCircleFill style={{ fontSize: "4px", margin: "0 5px" }} />
              <span>{newsItem.name}</span>
              <div className="card-title">{newsItem.title}</div>
              <div className="card-text">{newsItem.text}.</div>
              {newsItem.hashtag ? (
                <div className="card-text hashtag">{newsItem.hashtag}</div>
              ) : null}
            </div>
            {newsItem.image ? (
              <img src={newsItem.image} alt={newsItem.author + " image"} />
            ) : null}
          </div>
        ))}
        <a href="/b">
          See more <span className="screen-reader-text">Details</span>
        </a>
      </div>
      <div className="card-wrapper">
        <h3>Who to follow</h3>
        {profilesArr.map((profile, id) => (
          <div className="follow-card" key={id}>
            <img
              src={profile.avatar}
              alt={profile.name + "'s avatar"}
              className="avatar follow-img"
            />
            <div className="follow-info">
              <div>
                <span>{profile.name}</span>
                <div
                  style={{
                    fontSize: "inherit",
                    color: "#717171",
                    cursor: "pointer",
                  }}
                >
                  {profile.handle}
                </div>
              </div>
              <div className="follow-btn">
                <button>Follow</button>
              </div>
            </div>
          </div>
        ))}
        <a href="/b">See more</a>
      </div>
    </div>
  );
};

export default LeftPanel;
