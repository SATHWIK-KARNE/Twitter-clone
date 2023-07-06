// es7 shortcut=> rfec=> react template
import React, { useEffect, useState } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "./firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  // useEffect runs based on a given condition(inside []) or Feed component loads
  useEffect(() => {
    // any time db changes:
    db.collection("posts").onSnapshot(
      (snapshot) => setPosts(snapshot.docs.map((doc) => doc.data())) //(snapshot.docs.map(doc=>doc.data())) will give array of all posts inside db
    );
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      {/* get post info from db and show it in post component */}
      {/* flipMove  is used for animation when adding a post or refresh */}
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text} //all cards are flipped based on key
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
