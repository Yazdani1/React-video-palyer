import React from "react";
import "./video.css";
import ReactPlayer from "react-player";
const VideoDetails = ({ title, name, url, photo, date }) => {
  return (
    <React.Fragment>
      <div className="video_item_design">
        <ReactPlayer
          loop={true}
          playing={false}
          controls
          height="250px"
          width="auto"
          url={url}
        />
        <div className="video_title_design">
          <h6>{title}</h6>
          <p>{date}</p>
          <div className="profile_pic_name">
            <div className="profile_pic">
              <img src={photo} alt="photo" />
            </div>
            <div className="name">
             
              <p>{name}</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default VideoDetails;
