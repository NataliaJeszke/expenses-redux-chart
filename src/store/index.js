import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { expenseSlice } from "./expense/expense-slice";
import { incomeSlice } from "./income/income-slice";
import { categorySlice } from "./category/category-slice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  EXPENSE: expenseSlice.reducer,
  INCOME: incomeSlice.reducer,
  CATEGORY: categorySlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export { store };
