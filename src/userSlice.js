import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: `Иван Дурак`,
  budget: 100,
  currentProfit: 0,
  currentBet: 0,
  selectedIvent: {}
};

const userSlice = createSlice({
  name: `user`,
  initialState,
  reducers: {
    setUserBet: {
      reducer(state, action) {
        state = action.payload;
      }
    },
    setSelectedIvent(state, action) {
      state.selectedIvent = action.payload;
    }
  }
});

export default userSlice.reducer;

export const { setUserBet, setSelectedIvent } = userSlice.actions;

export const getName = (state) => {
  return state.user.name;
};

export const getBudget = (state) => {
  return state.user.budget;
};
