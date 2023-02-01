import { button } from "@mui/material";
import React from 'react'
import "./TweetBox.css";
import { Avatar } from "@mui/material";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://images.pexels.com/photos/4587959/pexels-photo-4587959.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></Avatar>
          <input placeholder="What's happening?" type="text" />
        </div>
        <div className="tweetBox__header">
          <PhotoOutlinedIcon fontSize="small" />
          <GifBoxOutlinedIcon fontSize="small" />
          <SentimentSatisfiedAltOutlinedIcon fontSize="small" />
          <DateRangeOutlinedIcon fontSize="small" />
          <PlaceOutlinedIcon fontSize="small" />
        </div>

        <button className="tweetBox__tweetButton">Tweet</button>
      </form>
    </div>
  );
}

export default TweetBox;