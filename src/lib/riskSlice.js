import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import db from "./firebase";
import { ref, get } from 'firebase/database';

export const fetchRiskData = createAsyncThunk(
  "riskData/fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const dataRef = ref(db, "/"); // Replace with your data path
      const snapshot = await get(dataRef);
      const data = snapshot.val();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const riskSlice = createSlice({
  name: "risk",
  initialState: {
    items: null,
    loading: false,
    error: null,
    selected: null,
    selectedRank: null,
  },
  reducers: {
    setSelectedRisk: (state, action) => {
      state.selected = action.payload.selected;
      state.selectedRank = action.payload.rank;
    },
    clearSelectedRisk: (state) => {
      state.selected = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRiskData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRiskData.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchRiskData.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { setSelectedRisk, clearSelectedRisk } = riskSlice.actions;

export default riskSlice.reducer;
