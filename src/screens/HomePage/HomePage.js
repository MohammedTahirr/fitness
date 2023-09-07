import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./HomePage.css";
import VideoCard from "../../components/VideoCard/VideoCard";
import Header from "../../components/Header/Header";
import { getAssignVideos } from "../../Redux/features/VideoData";

const HomePage = () => {
  const dispatch = useDispatch();
  const { loading, assignmentVideos, assignmentVideosFailed } = useSelector(
    (state) => state.Video
  );

  const search = (e) => {
    dispatch(getAssignVideos(e));
  };

  return (
    <>
      <Header
        placeholder={"Search..."}
        onInput={(e) => search(e.target.value)}
      />
      <div className="home-page-container">
        {assignmentVideos.length === 0 && !assignmentVideosFailed && (
          <span>Type something...</span>
        )}
        {assignmentVideos.length === 0 && assignmentVideosFailed && (
          <span>Type something...</span>
        )}
        {assignmentVideos && (
          <div className="video-cards-container">
            {assignmentVideos.map((res, i) => (
              <VideoCard
                key={i}
                title={res.heading}
                description={res.text}
                videoUrl={res.video}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
