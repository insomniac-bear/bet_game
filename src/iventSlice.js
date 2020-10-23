import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { name: `Fire`, percent: 10 },
  { name: `Water`, percent: 5 },
  { name: `Snow`, percent: 15 },
  { name: `Danger`, percent: 25 }
];

const eventSlice = createSlice({
  name: `ivents`,
  initialState,
  reducers: {}
});

export default eventSlice.reducer;

export const getAllEvents = (state) => {
  return state.events;
};

export const getIventByName = (name, state) => {
  return state.events.find((it) => it.name === name);
};
