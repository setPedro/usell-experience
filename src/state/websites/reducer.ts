import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Websites, WebsiteState } from "./types";

const initialState: WebsiteState = {
  websites: {},
  isWebsitesLoading: true,
};

const websitesSlice = createSlice({
  name: "websites",
  initialState,
  reducers: {
    setWebsites(state, action: PayloadAction<Websites>) {
      state.websites = action.payload;
      state.isWebsitesLoading = false;
    }
  },
});

export const { setWebsites } = websitesSlice.actions;

export default websitesSlice.reducer;
