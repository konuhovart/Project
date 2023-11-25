import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const fetchCategory = createAsyncThunk(
  "category/fetchCategory",
  async () => {
    const response = await fetch("http://localhost:3333/categories/all");
    const data = await response.json();
    return data;
  }
);

  const categorySlice = createSlice({
  name: "category",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategory.fulfilled, (state, { payload }) => {
        state.status = "ready";
        state.list = payload;
      })
      .addCase(fetchCategory.rejected, (state) => {
        state.status = "error";
      });
  },
});

export default categorySlice.reducer;
