import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Post.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import axios from "axios";
import { Link } from 'react-router-dom';

async function getRandomImage() {
  const response = await axios.get('https://picsum.photos/400/300');
  return response.request.responseURL;
}

async function getRandomUser() {
  const response = await axios.get('https://randomuser.me/api');
  const user = response.data.results[0].login.username;
  return user;
}

async function getRandomProfileImage() {
  const response = await axios.get('https://picsum.photos/50');
  return response.request.responseURL;
}

function Post({ user: initialUser, postImage: initialPostImage, likes, timestamp }) {
  const [user, setUser] = useState(null);
  const [postImage, setPostImage] = useState(null);
  const [userImage, setUserImage] = useState("");
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [showComments, setShowComments] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    const username = localStorage.getItem('username');
    setComments([...comments, { user: username, text: newComment }]);
    setNewComment("");
  };

  const handleCommentIconClick = () => {
    setShowComments(!showComments);
  };

  useEffect(() => {
    async function fetchData() {
      const randomPostImage = await getRandomImage();
      const randomUserName = await getRandomUser();
      const profileImage = await getRandomProfileImage();

      setPostImage(randomPostImage);
      setUserImage(profileImage);
      setUser(randomUserName);
    }

    fetchData();
  }, []);

  return (
    user !== null && postImage !== null && (
      <div className="post">
        <div className="postheader">
          <div className="postheaderAuthor">
            <Link to={`/Profile/${user}`}>
              <Avatar src={userImage} style={{ marginRight: "10px" }} />
            </Link>
            {user} • <span>{timestamp}</span>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="postimage">
          <img src={postImage} alt="Post Image" />
        </div>
        <div className="postfooter">
          <div className="postfooterIcons">
            <div className="posticonsMain">
              <div onClick={handleLikeClick}>
                {liked ? <FavoriteIcon className={`postIcon button`} /> : <FavoriteBorderIcon className="postIcon" />}
              </div>
              <ChatBubbleOutlineIcon className="postIcon" onClick={handleCommentIconClick} />
            </div>
          </div>
          Liked by {liked ? likes + 1 : likes} people.
          {showComments && (
            <div>
              {comments.map((comment, index) => (
                <p key={index}><strong>{comment.user}</strong> {comment.text}</p>
              ))}
              <form className="postcommentForm" onSubmit={handleCommentSubmit}>
                <input
                  type="text"
                  value={newComment}
                  onChange={(event) => setNewComment(event.target.value)}
                  placeholder="Add a comment..."
                />
                <button type="submit">Post</button>
              </form>
            </div>
          )}
        </div>
      </div>
    )
  );
}

export default Post;







