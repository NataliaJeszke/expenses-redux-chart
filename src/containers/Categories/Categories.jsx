import { addCategoryAction } from "../../store/category/category-slice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { CategoryInput } from "../CategoryInput/CategoryInput";

export function Categories() {
  return (
    <div>
      <CategoryInput />
      <div>Lista kategorii</div>
    </div>
  );
}
