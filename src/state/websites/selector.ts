import { RootState } from "../store";

export const selectWebsites = (state: RootState) => state.websites.websites;
export const selectIsWebsitesLoading = (state: RootState) =>
  state.websites.isWebsitesLoading;
