import { configureStore } from "@reduxjs/toolkit";
import eventSlice from "./iventSlice";
import userSlice from "./userSlice";

export default configureStore({
  reducer: {
    events: eventSlice,
    user: userSlice
  }
});
