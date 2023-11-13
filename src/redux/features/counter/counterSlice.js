import { createSlice } from "@reduxjs/toolkit";

const initState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    actIncrement: (state, action) => {
      console.log(action, "action ne");
      state.count = state.count + action.payload;
    },
    actDecrement: (state, action) => {
      state.count = state.count - action.payload;
    },
  },
});

export const { actIncrement, actDecrement } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
