import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import { postsDB } from "./Firebase";
import { addDoc } from "firebase/firestore";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = async (e) => {
    e.preventDefault();
    const newRecord = await addDoc(postsDB, {
      displayName: "cherié🌸",
      username: "dearIy_beIoved",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://images.pexels.com/photos/982300/pexels-photo-982300.jpeg?cs=srgb&dl=pexels-alena-koval-982300.jpg&fm=jpg",
    });

    setTweetMessage("");
    setTweetImage("");
    return newRecord;
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://images.pexels.com/photos/982300/pexels-photo-982300.jpeg?cs=srgb&dl=pexels-alena-koval-982300.jpg&fm=jpg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
