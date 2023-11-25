

import React, { useEffect, useState } from 'react';
import { FaUserPlus, FaUserCheck } from 'react-icons/fa';
import axios from 'axios';
import './Profile.css';
import ProfilePosts from './ProfilePosts';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    async function fetchRandomUserData() {
      try {
        const response = await axios.get('https://randomuser.me/api');

        setUserData({
          ...response.data.results[0],
          posts: Math.floor(Math.random() * 100) + 1,
          followers: Math.floor(Math.random() * 5000) + 1,
          following: Math.floor(Math.random() * 500) + 1,
        });
      } catch (error) {
        console.error('Error fetching random user data:', error);
      }
    }

    fetchRandomUserData();
  }, []);

  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);


    setUserData((prevUserData) => ({
      ...prevUserData,
      followers: isFollowing ? prevUserData.followers - 1 : prevUserData.followers + 1,
    }));
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-image-container">
          {userData && userData.picture && (
            <img
              src={userData.picture.large}
              alt="Profile"
              className="profile-image"
            />
          )}
        </div>
        <div className="profile-info">
          <div className="top-section">
            <h1 className="username">{userData && userData.name.first}</h1>
            <button
              className={`follow-button ${isFollowing ? 'followed' : ''}`}
              onClick={handleFollowToggle}
            >
              {isFollowing ? <FaUserCheck /> : <FaUserPlus />}{' '}
              {isFollowing ? 'Followed' : 'Follow'}
            </button>
          </div>
          <div className="stats-section">
            <p>
              <strong>{userData && userData.posts}</strong> posts
            </p>
            <p>
              <strong>{userData && userData.followers}</strong> followers
            </p>
            <p>
              <strong>{userData && userData.following}</strong> following
            </p>
          </div>
          <div className="bio-section">
            {}
          </div>
        </div>
      </div>
      <ProfilePosts />
    </div>
  );
};

export default Profile;
























