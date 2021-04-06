import { createSlice } from "@reduxjs/toolkit";

interface ErrorState {
  value: boolean;
}

const initialState: ErrorState = {
  value: false,
};

export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    catchError: (state) => {
      state.value = true;
    },
    clearError: (state) => {
      state.value = false;
    },
    changeErrorStatus: (state) => {
      state.value = !state.value;
    },
  },
});

export const { catchError, clearError, changeErrorStatus } = errorSlice.actions;

export default errorSlice.reducer;
