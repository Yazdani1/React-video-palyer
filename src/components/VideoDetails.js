import React from "react";
import "./video.css";

const VideoDetails = ({title,name,url,photo,date}) => {
  return (
    <React.Fragment>
   
      <div className="video_item_design">
      <p>{date}</p>
        <h6>{title}</h6>
        <p>{name}</p>
      </div>
    </React.Fragment>
  );
};

export default VideoDetails;
