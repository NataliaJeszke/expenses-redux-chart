import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "categorySlice",
  initialState: {
    categoryList: [
      { value: "housing", label: "Housing" },
      { value: "food", label: "Food" },
      { value: "transportation", label: "Transportation" },
      { value: "clothing", label: "Clothing" },
      { value: "medical", label: "Medical" },
      { value: "personal", label: "Personal" },
    ],
  },
  reducers: {
    addCategoryAction: (currentSlice, action) => {
      currentSlice.categoryList.push(action.payload);
    },

    deleteCategory: (currentSlice, action) => {
      currentSlice.categoryList = currentSlice.categoryList.filter(
        (category) => category.value !== action.payload
      );
    },
  },
});

export const { addCategoryAction, deleteCategory } = categorySlice.actions;

export default categorySlice.reducer;
