import React, { useState } from "react";
import VideoDetails from "./VideoDetails";
import "./video.css";

import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
const Video = ({ toggleTheme, theme }) => {
  const data = [
    {
      title: "React hooks",
      url: "https://www.youtube.com/watch?v=hQAHSlTtcmY",
      name: "David Jonson",
      photo:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "20 Jun 2021",
      id: "1",
    },
    {
      title: "React hooks",
      url: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
      name: "David Jonson",
      photo:
        "https://images.pexels.com/photos/3756862/pexels-photo-3756862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "20 Jun 2021",
      id: "2",
    },
    {
      title: "React hooks",
      url: "https://www.youtube.com/watch?v=Dorf8i6lCuk",
      name: "David Jonson",
      photo:
        "https://images.pexels.com/photos/1839904/pexels-photo-1839904.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      date: "20 Jun 2021",
      id: "3",
    },
    {
      title: "React hooks",
      url: "https://www.youtube.com/watch?v=LlvBzyy-558",
      name: "David Jonson",
      photo:
        "https://images.pexels.com/photos/2313635/pexels-photo-2313635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "20 Jun 2021",
      id: "4",
    },
    {
      title: "React hooks",
      url: "https://www.youtube.com/watch?v=LlvBzyy-558",
      name: "David Jonson",
      photo:
        "https://images.pexels.com/photos/2313635/pexels-photo-2313635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "20 Jun 2021",
      id: "5",
    },
    {
      title: "React hooks",
      url: "https://www.youtube.com/watch?v=LlvBzyy-558",
      name: "David Jonson",
      photo:
        "https://images.pexels.com/photos/2313635/pexels-photo-2313635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "20 Jun 2021",
      id: "6",
    },
    {
      title: "React hooks",
      url: "https://www.youtube.com/watch?v=LlvBzyy-558",
      name: "David Jonson",
      photo:
        "https://images.pexels.com/photos/2313635/pexels-photo-2313635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "20 Jun 2021",
      id: "7",
    },
    {
      title: "React hooks",
      url: "https://www.youtube.com/watch?v=LlvBzyy-558",
      name: "David Jonson",
      photo:
        "https://images.pexels.com/photos/2313635/pexels-photo-2313635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "20 Jun 2021",
      id: "8",
    },

    {
      title: "React hooks",
      url: "https://www.youtube.com/watch?v=LlvBzyy-558",
      name: "David Jonson",
      photo:
        "https://images.pexels.com/photos/2313635/pexels-photo-2313635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "20 Jun 2021",
      id: "9",
    },
    {
      title: "React hooks",
      url: "https://www.youtube.com/watch?v=LlvBzyy-558",
      name: "David Jonson",
      photo:
        "https://images.pexels.com/photos/2313635/pexels-photo-2313635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "20 Jun 2021",
      id: "10",
    },
    {
      title: "React hooks",
      url: "https://www.youtube.com/watch?v=LlvBzyy-558",
      name: "David Jonson",
      photo:
        "https://images.pexels.com/photos/2313635/pexels-photo-2313635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "20 Jun 2021",
      id: "11",
    },
    {
      title: "React hooks",
      url: "https://www.youtube.com/watch?v=LlvBzyy-558",
      name: "David Jonson",
      photo:
        "https://images.pexels.com/photos/2313635/pexels-photo-2313635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "20 Jun 2021",
      id: "12",
    },
    {
      title: "React hooks",
      url: "https://www.youtube.com/watch?v=LlvBzyy-558",
      name: "David Jonson",
      photo:
        "https://images.pexels.com/photos/2313635/pexels-photo-2313635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "20 Jun 2021",
      id: "13",
    },
    {
      title: "React hooks",
      url: "https://www.youtube.com/watch?v=LlvBzyy-558",
      name: "David Jonson",
      photo:
        "https://images.pexels.com/photos/2313635/pexels-photo-2313635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "20 Jun 2021",
      id: "14",
    },
    {
      title: "React hooks",
      url: "https://www.youtube.com/watch?v=LlvBzyy-558",
      name: "David Jonson",
      photo:
        "https://images.pexels.com/photos/2313635/pexels-photo-2313635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "20 Jun 2021",
      id: "15",
    },
  ];

  const [videData, setVideoData] = useState(data);
  const [showMore, setShowMore] = useState(6);

  const loadMore = () => {
    setShowMore((prev) => prev + 3);
  };

  return (
    <div className="container">
      <div className="theme-chang " onClick={() => toggleTheme()}>
        {theme === "light" ? (
          <p className="theme-iconss">
            <BsFillMoonStarsFill size={40} color="white"/>
          </p>
        ) : (
          <p className="theme-icon">
            <BsFillSunFill size={40} />
          </p>
        )}
      </div>

      <div className="row">
        {videData &&
          videData.slice(0, showMore).map((video, index) => (
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <VideoDetails key={video.id} {...video} />
            </div>
          ))}
        {showMore >= data.length ? null : (
          <div
            onClick={loadMore}
            className="loadmore"
            style={{
              textAlign: "center",
              marginTop: "5px",
              fontSize: "20px",
              color: "white",
              cursor: "pointer",
              marginBottom:"20px",
              background: "black",
              borderRadius: "20px",
            }}
          >
            Load More
          </div>
        )}
      </div>
    </div>
  );
};

export default Video;
