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
    isDuplicated: false,
  },
  reducers: {
    addCategoryAction: (currentSlice, action) => {
      // currentSlice.categoryList.push(action.payload);
      const isDuplicate = currentSlice.categoryList.some(
        (category) => category.value === action.payload.value
      );

      if (isDuplicate) {
        currentSlice.isDuplicated = true;
      } else {
        currentSlice.categoryList.push(action.payload);
        currentSlice.isDuplicated = false;
      }
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
