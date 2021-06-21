import React, { useState } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post";

function Feed() {
  const [posts, setPosts] = useState([]);
  const sendPost = (e) => {
    e.preventDefault();
  };

  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <CreateIcon />
          <form>
            <input type='text' placeholder='Start a post' />
            <button onClick={sendPost} type='submit'>
              Send
            </button>
          </form>
        </div>
        <div className='feed__inputOptions'>
          <InputOption title='Photo' Icon={ImageIcon} color='#70B5F9' />
          <InputOption title='Video' Icon={SubscriptionsIcon} color='#E7A33E' />
          <InputOption title='Event' Icon={EventNoteIcon} color='#C0CBCD' />
          <InputOption
            title='Write Article'
            Icon={CalendarViewDayIcon}
            color='#7FC15E'
          />
        </div>
      </div>
      {posts.map((post) => (
        <Post />
      ))}

      <Post
        name='Federico Giovannini'
        description='This is a test'
        message='Hello'
      />
    </div>
  );
}

export default Feed;
