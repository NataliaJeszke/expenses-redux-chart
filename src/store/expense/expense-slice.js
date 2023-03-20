import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
    name: 'expenseSlice',
    initialState: {
        expenseList:[{name:'fdg', price:1.00}, {name: 'laptop', price: 10.00}]
    },
    reducers:{
        addExpenseAction: () =>{
            console.log("addExpenseActionConsole");
        }
    }
});

export const {addExpenseAction} = expenseSlice.actions