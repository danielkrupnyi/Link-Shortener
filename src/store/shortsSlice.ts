import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: string[];
}

const initialState: CounterState = {
  value: [],
};

export const shortsSlice = createSlice({
  name: "shorts",
  initialState,
  reducers: {
    addShort: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
  },
});

export const { addShort } = shortsSlice.actions;

export default shortsSlice.reducer;
