import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ASSIGNMENT_VIDEOS } from "../../utils/baseURL";
import { buildSearchParams } from "../../utils/buildSearchParams";

const initialState = {
  loading: false,
  assignmentVideos: [],
  assignmentVideosFailed: null,
};

export const getAssignVideos = createAsyncThunk(
  "VideoData/getAssignVideos",
  async (text, { rejectWithValue }) => {
    try {
      const query = {
        q: text,
        numResults: 20,
      };
      const config = {
        method: "GET",
        url: ASSIGNMENT_VIDEOS + buildSearchParams(query),
      };
      const results = await axios(config);
      if (results.data.status === "success") {
        return results.data.results;
      } else {
        return rejectWithValue("No Results Found");
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const VideoData = createSlice({
  name: "VideoData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAssignVideos.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAssignVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.assignmentVideos = action.payload;
        state.assignmentVideosFailed = null;
      })
      .addCase(getAssignVideos.rejected, (state, action) => {
        state.loading = false;
        state.assignmentVideosFailed = action.payload;
        state.assignmentVideos = [];
      });
  },
});

export default VideoData.reducer;
