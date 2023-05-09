import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import { postsDB } from "./Firebase";
import FlipMove from "react-flip-move";
import { getDocs } from 'firebase/firestore';


function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    async function getPosts () {
      const snapshot = await getDocs(postsDB);
      const docs = snapshot.docs.map(doc => doc.data());
      setPosts(docs)
    }
    getPosts()
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
