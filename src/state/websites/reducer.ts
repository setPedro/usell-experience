import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Web, Websites } from "./types";

interface SetWebsitesPayload {
  websites: Websites;
}

const initialState: Websites = {};

const websitesSlice = createSlice({
  name: "websites",
  initialState,
  reducers: {
    setWebsites(state, action: PayloadAction<SetWebsitesPayload>) {
      return action.payload.websites;
    },
  },
});

export const { setWebsites } = websitesSlice.actions;

export default websitesSlice.reducer;
