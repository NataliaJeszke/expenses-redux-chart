import { createSlice } from "@reduxjs/toolkit";

export const incomeSlice = createSlice({
    name: 'incomeSlice',
    initialState: {
        incomeList:[{income:1000.00}]
    }
})