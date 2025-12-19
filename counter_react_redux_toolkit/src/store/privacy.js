import { createSlice } from "@reduxjs/toolkit";

const privacySlice = createSlice({
  name: "privacy",
  initialState: { myPrivacy: false },
  reducers: {
    privacyToggle: (state) => {
      state.myPrivacy = !state.myPrivacy;
    },
  },
});

export const privacyActions = privacySlice.actions;
export default privacySlice;
