import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dispService from "./dispService";

const initialState = {
  display: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get data
export const getDisp = createAsyncThunk("display", async (_, thunkAPI) => {
  try {
    return await dispService.getDisp();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const dispSlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder

      .addCase(getDisp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDisp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.display = action.payload;
      })
      .addCase(getDisp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = dispSlice.actions;
export default dispSlice.reducer;
