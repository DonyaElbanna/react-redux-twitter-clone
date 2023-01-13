import React from "react";
import { FiSearch, FiSettings } from "react-icons/fi";
import { BsCircleFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const LeftPanel = () => {
  const news = useSelector((state) => state.news);
  const newsArr = Object.values(news);

  const profiles = useSelector((state) => state.profiles);
  const profilesArr = Object.values(profiles);
  // console.log(profilesArr);

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
        <a href="/b">See more</a>
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
