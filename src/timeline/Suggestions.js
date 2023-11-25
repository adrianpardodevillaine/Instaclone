import { Avatar } from "@mui/material";
import React from "react";
import "./Suggestions.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Suggestions() {
  const [suggestedUsers, setSuggestedUsers] = useState([]);
  const [isFollowing, setIsFollowing] = useState({});

  const getSuggestedUsers = async () => {
    const response = await axios.get('https://randomuser.me/api/?results=5');
    const users = response.data.results.map(user => ({
      username: user.login.username,
      profileImage: user.picture.medium,
    }));
    setSuggestedUsers(users);
    setIsFollowing(users.reduce((acc, user) => ({ ...acc, [user.username]: false }), {})); 
  };

  const handleFollowClick = (username) => {
    setIsFollowing({ ...isFollowing, [username]: !isFollowing[username] });
  };

  useEffect(() => {
    getSuggestedUsers();
  }, []);

  return (
    <div className="suggestions">
      <div className="suggestions__header">
        {}
      </div>
      <div className="suggestions__list">
        {suggestedUsers.map((user, index) => (
          <div key={index} className="suggestions__username">
            <div className="username__left">
              <span className="avatar">
                <Avatar src={user.profileImage}>{user.username[0]}</Avatar>
              </span>
              <div className="username__info">
                <span className="username">{user.username}</span>
                <span className="relation">New to Instagram</span>
              </div>
            </div>
            <button className="follow__button" onClick={() => handleFollowClick(user.username)}>
              {isFollowing[user.username] ? 'Followed' : 'Follow'} {}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Suggestions;