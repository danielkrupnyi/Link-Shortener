import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InputTextState {
  value: string;
}

const initialState: InputTextState = {
  value: "",
};

export const InputTextSlice = createSlice({
  name: "inputText",
  initialState,
  reducers: {
    observeInputText: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { observeInputText } = InputTextSlice.actions;

export default InputTextSlice.reducer;
