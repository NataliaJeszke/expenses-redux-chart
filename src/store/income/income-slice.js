import { createSlice } from "@reduxjs/toolkit";

export const incomeSlice = createSlice({
  name: "incomeSlice",
  initialState: {
    income: 10000,
  },
  reducers: {
    setIncomeAction: (currentSlice, action) => {
      currentSlice.income = action.payload;
    },
  },
});

export const { setIncomeAction } = incomeSlice.actions;

export default incomeSlice.reducer;
