import React, {useState, useEffect } from 'react';
import TweetBox from "./TweetBox";
import Post from "./Post";
import './Feed.css';
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import db from './firebase';

function Feed() {

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
        <div className="feed1">
          <AutoAwesomeIcon fontSize="small" />
        </div>
      </div>

      <TweetBox />

      <Post
        displayName="sandra adeyinka"
        username="sandraaa"
        verified={true}
        text="yooo its working"
        avatar="https://images.pexels.com/photos/4587959/pexels-photo-4587959.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        image={"https://media.giphy.com/media/L4lvBzeiy0z6w/giphy.gif"}
      />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed