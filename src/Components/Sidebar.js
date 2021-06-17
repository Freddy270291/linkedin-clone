import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => (
    <div className='sidebar__recentItem'>
      <span className='sidebar__hash'>#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img
          src='https://images.pexels.com/photos/3745234/pexels-photo-3745234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          alt=''
        />
        <Avatar className='sidebar__avatar' />
        <h2>Federico Giovannini</h2>
        <h4>fgiovannini@gmail.com</h4>
      </div>
      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <p>who viewed you</p>
          <p className='sidebar__statNumber'>2.543</p>
        </div>
        <div className='sidebar__stat'>
          <p>views on posts</p>
          <p className='sidebar__statNumber'>2.498</p>
        </div>
      </div>
      <div className='sidebar__bottom'>
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("software engineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;