import React, { useState } from "react";
import VideoDetails from "./VideoDetails";
const Video = () => {
  const data = [
    {
      title: "React hooks",
      url: "",
      name: "David Jonson",
      photo: "",
      date: "20 Jun 2021",
      id: "1",
    },
    {
      title: "React hooks",
      url: "",
      name: "David Jonson",
      photo: "",
      date: "20 Jun 2021",
      id: "2",
    },
    {
      title: "React hooks",
      url: "",
      name: "David Jonson",
      photo: "",
      date: "20 Jun 2021",
      id: "3",
    },
    {
      title: "React hooks",
      url: "",
      name: "David Jonson",
      photo: "",
      date: "20 Jun 2021",
      id: "4",
    },
  ];

  const [videData, setVideoData] = useState(data);

  return (
    <div className="container" style={{ marginTop: "80px" }}>
      <div className="row">
        {videData &&
          videData.map((video, index) => (
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12">
             <VideoDetails key={video.id} {...video}/>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Video;
