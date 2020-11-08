//Подключаем createSlice - создает срез хранилища (отдельную часть хранилища отвечающую за определенную логику приложения)
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; // createAsyncThunk отвечает за асинхронную логику в редьюсере

// Инициализируем начальное состояние хранилища
const initialState = {
  name: ``,
  budget: 100,
  currentProfit: 0,
  currentBet: 0,
  selectedIvent: {},
  status: `idle`,
  error: null,
};

// Функция загрузки данных пользователя с сервера
export const fetchUser = createAsyncThunk(`user/fetchUser`, async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/2')
  const json = await response.json();
  return json;
});

// Определяем Срез хранилища, который отвечает за логику игрока
const userSlice = createSlice({
  name: `user`, // Имя Slice
  initialState, // Начальное состояние хранилища
  reducers: { //  Методы, которые изменяют часть хранилища, отвечающего за пользователя
    setUserBet: { // Метод, который устанавливает ставку, которую сделал пользователь
      reducer(state, action) { // reducer принимает state и action
        state.currentBet = action.payload;
      }
    },
    setSelectedIvent(state, action) { // Метод, который устанвливает событие, выбранное пользователем
    // action.type === имя метода (reducer)
      state.selectedIvent = action.payload;
    },
    setBudget(state, action) { 
      state.budget = state.budget + action.payload;
    },
    setCurrentProfit(state, action) { // Метод, который устанавливает результат сделанной ставки
      state.currentProfit = action.payload;
    },
  },
  extraReducers: {
    [fetchUser.pending]: (state, action) => {
      state.status = `loading`;
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.status = `succeeded`;
      state.name = action.payload.name;
    },
    [fetchUser.rejected]: (state, action) => {
      state.status = `failed`;
      state.error = action.error.message;
    }
  }
});

export default userSlice.reducer;

export const { setUserBet, setSelectedIvent, setBudget, setCurrentProfit } = userSlice.actions; // Экспортируем методы (reducers) для изменения хранилища

export const getName = (state) => {
  return state.user.name;
};

export const getBudget = (state) => {
  return state.user.budget;
};
