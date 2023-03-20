import { configureStore } from "@reduxjs/toolkit";
import { expenseSlice } from "./expense/expense-slice";
import { incomeSlice } from "./income/income-slice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage
};

const reducer = combineReducers({
  EXPENSE: expenseSlice.reducer,
  INCOME: incomeSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer
});

export { store };
