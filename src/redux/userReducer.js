import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  username: "",
  kabupaten: "",
  id_kabupaten: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
      state.username = action.payload.username;
      state.id_kabupaten = action.payload.id_kabupaten;
      state.kabupaten = action.payload.kabupaten;
    },
  },
});

export const { setToken } = userSlice.actions;

export default userSlice.reducer;
