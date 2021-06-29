import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className='widgets__article'>
      <div className='widgets__articleLeft'>
        <FiberManualRecordIcon />
      </div>

      <div className='widgets__articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("This is a LinkedIn Clone!", "Top news - 9.9k readers")}
      {newsArticle("Is the market going to crash?", "Top news - 3.2k readers")}
      {newsArticle("Doge to the Moon?", "Top news - 1.4k readers")}
      {newsArticle("Some other fake article here", "Top news - 867 readers")}
    </div>
  );
}

export default Widgets;
