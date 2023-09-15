import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./HomePage.css";
import VideoCard from "../../components/VideoCard/VideoCard";
import Header from "../../components/Header/Header";
import { getAssignVideos } from "../../Redux/features/VideoData";
import FilterChips from "../../components/FilterChips/FilterChips";

const HomePage = () => {
  const dispatch = useDispatch();
  const [tags, setTags] = useState([]);
  const [results, setResults] = useState([]);
  const [filterTags, setFilterTags] = useState([]);
  const { loading, assignmentVideos, assignmentVideosFailed } = useSelector(
    (state) => state.Video
  );

  useEffect(() => {
    getTags();
    setResults(assignmentVideos);
  }, [assignmentVideos]);

  const search = (e) => {
    dispatch(getAssignVideos(e));
  };

  const getTags = (e) => {
    const retrieveTags = assignmentVideos.map((res, i) => res.tags);
    const tags = flatArr(retrieveTags);
    const removeDuplicates = [...new Set(tags)];
    setTags(removeDuplicates);
  };

  const flatArr = (array, results = []) => {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        flatArr(array[i], results);
      } else {
        results.push(array[i]);
      }
    }
    return results;
  };

  const filter = (e) => {
    if (filterTags.includes(e)) {
      const data = filterTags.filter((res) => res !== e);
      setFilterTags(data);
      return;
    }
    let newArr = [...filterTags, e];
    setFilterTags(newArr);
    console.log(newArr);
    const filterVideos = assignmentVideos.filter((res, i) =>
      res.tags.includes(...newArr)
    );
    setResults(filterVideos);
  };

  return (
    <>
      <Header
        placeholder={"Search..."}
        onInput={(e) => search(e.target.value)}
      />
      {tags.map((res, i) => (
        <FilterChips onClick={filter} key={i} label={res} />
      ))}
      <div className="home-page-container">
        {results.length === 0 && !assignmentVideosFailed && (
          <span>Type something...</span>
        )}
        {results.length === 0 && assignmentVideosFailed && (
          <span>Type something...</span>
        )}
        {results && (
          <div className="video-cards-container">
            {results.map((res, i) => (
              <VideoCard
                key={i}
                title={res.heading}
                description={res.text}
                videoUrl={res.video}
                tags={res.tags.toString()}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
