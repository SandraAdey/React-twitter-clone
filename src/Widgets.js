import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1608053293011599360"} />
        <TwitterTweetEmbed tweetId={"1619783420527378433"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cats with jobs 🛠"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={
            "https://twitter.com/CatWorkers/status/1619783420527378433?cxt=HHwWgoDQmYyc0PosAAAA"
          }
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
