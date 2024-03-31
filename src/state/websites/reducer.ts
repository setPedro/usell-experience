import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Websites, WebsiteState } from "./types";

const initialState: WebsiteState = {
  websites: {}
};

const websitesSlice = createSlice({
  name: "websites",
  initialState,
  reducers: {
    setWebsites(state, action: PayloadAction<Websites>) {
      state.websites = action.payload;
    }
  },
});

export const { setWebsites } = websitesSlice.actions;

export default websitesSlice.reducer;
