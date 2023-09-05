import { configureStore } from "@reduxjs/toolkit";
import VideoData from "./features/VideoData";

const store = configureStore({
  reducer: {
    Video: VideoData,
  },
});

export default store;
