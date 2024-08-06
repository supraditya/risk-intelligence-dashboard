import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  minLikelihood: 1,
  minSeverity: 1,
  topics: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setMinLikelihood: (state, action) => {
      state.minLikelihood = action.payload;
    },
    setMinSeverity: (state, action) => {
      state.minSeverity = action.payload;
    },
    addTopic: (state, action) => {
      state.topics.push(action.payload);
    },
    removeTopic: (state, action) => {
      state.topics = state.topics.filter((topic) => topic !== action.payload);
    },
    clearTopics: (state) => {
      state.topics = [];
    },
  },
});

export const { setMinLikelihood, setMinSeverity, addTopic, removeTopic, clearTopics } =
  filtersSlice.actions;

export default filtersSlice.reducer;
