// es7 shortcut=> rfec=> react template
import React, { useEffect, useState } from 'react'
import './Feed.css';
import TweetBox  from './TweetBox';
import Post from "./Post";
import db from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  // useEffect runs based on a given condition(inside []) or Feed component loads
  useEffect(() => {
    // any time db changes:
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data())) //(snapshot.docs.map(doc=>doc.data())) will give array of all posts inside db
      );
    }, []);

  

  return (
    <div className="feed">
      
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      
      <TweetBox />
      
      {/* get post info from db and show it in post component */}
      {posts.map((post) => (
          <Post
            // key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}

      {/* <Post 
      displayName="Sathwik Karne"
      username="karnesathwik"
      verified={true}
      text="working"
      avatar="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
      image="https://media.giphy.com/media/Daa5O9S8WuWYUZBucr/giphy.gif"

      /> */}
      {/* <Post />
      <Post />
      <Post />
      <Post /> */}
    </div>
  );
}

export default Feed
