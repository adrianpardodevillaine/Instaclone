

import React from 'react';
import './ProfilePosts.css';

const ProfilePosts = () => {

  const numPhotos = 21;
  const photos = Array.from({ length: numPhotos }, (_, index) => index + 1);

  return (
    <div className="profile-posts-container">
      {photos.map((photo) => (
        <img
          key={photo}
          src={`https://picsum.photos/200/200?random=${photo}`}
          alt={`Post ${photo}`}
          className="profile-post"
        />
      ))}
    </div>
  );
};

export default ProfilePosts;

