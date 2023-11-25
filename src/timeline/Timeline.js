import React, { useState, useEffect } from "react";
import Post from "./Post/Post";
import Suggestions from "./Suggestions";
import { Link } from 'react-router-dom';
import "./Timeline.css";

function getRandomTimestamp() {
  const randomNum = Math.floor(Math.random() * 10) + 1;
  return `${randomNum}d`;
}

function getRandomLikes() {
  return Math.floor(Math.random() * 500) + 1;
}

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "redian_",
      postImage:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      likes: 54,
      timestamp: "2d",
    },
    {
      user: "redian_",
      postImage:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      likes: 54,
      timestamp: "2d",
    },
    {
      user: "redian_",
      postImage:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      likes: 54,
      timestamp: "2d",
    },
    {
      user: "redian_",
      postImage:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      likes: 54,
      timestamp: "2d",
    },
  ]);

  useEffect(() => {
    const newPosts = posts.map(post => ({
      ...post,
      likes: getRandomLikes(),
      timestamp: getRandomTimestamp(),
    }));
    setPosts(newPosts);
  }, []);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post, index) => (
            <Post
              key={index}
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;

