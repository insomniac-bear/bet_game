import { configureStore } from "@reduxjs/toolkit"; // Метод конфигурации хранилища (combineReducer)
import eventSlice from "./iventSlice"; // Импортируем часть хранилища, отвечающего за события
import userSlice from "./userSlice"; // Импортируем часть хранилища, отвечающего за пользователя

export default configureStore({ // Объеденяем Части хранилища в одно целое
  reducer: {
    events: eventSlice,
    user: userSlice
  }
});
