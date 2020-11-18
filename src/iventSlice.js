import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { name: `Землятресение`, percent: 15 },
  { name: `Наводнение`, percent: 25 },
  { name: `Пожар`, percent: 10 },
  { name: `Ураган`, percent: 20 }
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
