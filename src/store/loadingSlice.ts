import { createSlice } from "@reduxjs/toolkit";

interface LoadingState {
  value: boolean;
}

const initialState: LoadingState = {
  value: false,
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.value = true;
    },
    stopLoading: (state) => {
      state.value = false;
    },
    changeLoadingStatus: (state) => {
      state.value = !state.value;
    },
  },
});

export const {
  startLoading,
  stopLoading,
  changeLoadingStatus,
} = loadingSlice.actions;

export default loadingSlice.reducer;
