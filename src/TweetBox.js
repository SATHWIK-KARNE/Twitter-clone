import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";



function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) =>{
    e.preventDefault(); //after submitting=>page do not refresh

    // store this tweet inside firebase same as post but with change of text=>input text
    db.collection('posts').add({
      displayName: 'Sathwik',
      username: 'karnesathwik',
      verified: true,
      text: tweetMessage, //the text we just wrote in tweetbox(before submitting tweet) 
      image: tweetImage,
      avatar:
        "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",

    })
    // clear previous entered input after submitting:
    setTweetMessage("");
    setTweetImage("");
  }

  return (
    <div className="tweetbox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />

          <input
            // whenever something is typed=> set that value to input state
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          ></input>

        </div>
        <div className="inputbox">

          <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
            className="tweetBox__imageInput"
            placeholder="Optional: Enter Image URL"
            type="text"
          ></input>

          <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;
