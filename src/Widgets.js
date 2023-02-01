import React from 'react'
import './Widgets.css';
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

      <di className="widgets__widgetContainer">
        <h2>What's happening</h2>
        

        <TwitterTweetEmbed tweetId={"1610496567727001600"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cat_auras"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://catauras.com"}
          options={{ text: "#I NEED THIS FOR HUG!! 🧸", via: "cat_auras" }}
        />
      </di>
    </div>
  );
}

export default Widgets