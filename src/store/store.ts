import { configureStore } from "@reduxjs/toolkit";
import shortsSlice from "./shortsSlice";
import loadingSlice from "./loadingSlice";
import errorSlice from "./errorSlice";
import inputTextSlice from "./inputTextSlice";

export const store = configureStore({
  reducer: {
    shorts: shortsSlice,
    loading: loadingSlice,
    error: errorSlice,
    inputText: inputTextSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
