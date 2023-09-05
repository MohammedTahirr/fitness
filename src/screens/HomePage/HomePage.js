import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./HomePage.css"; // Import the CSS file for styling
import VideoCard from "../../components/VideoCard/VideoCard";
import Header from "../../components/Header/Header";
import { getAssignVideos } from "../../Redux/features/VideoData";

const HomePage = () => {
  const dispatch = useDispatch();
  const { loading, assignmentVideos, assignmentVideosFailed } = useSelector(
    (state) => state.Video
  );

  return (
    <>
      <Header
        placeholder={"Search..."}
        onInput={(e) => dispatch(getAssignVideos(e.target.value))}
      />
      <div className="home-page-container">
        <div className="video-cards-container">
          <VideoCard title={"Let's go"} description={"GODMOIANGOISNOVN"} />
          <VideoCard title={"Let's go"} description={"GODMOIANGOISNOVN"} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
