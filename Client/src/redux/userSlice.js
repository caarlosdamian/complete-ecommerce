import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFehing: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFehing = true;
    },
    loginSuccess: (state, action) => {
      state.isFehing = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFehing = false;
      state.error = true;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;
