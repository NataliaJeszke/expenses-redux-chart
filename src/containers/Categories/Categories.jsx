import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { CategoryInput } from "../CategoryInput/CategoryInput";
import { CategoriesList } from "../CategoriesList/CategoriesList";

export function Categories() {

const categories = useSelector((store)=>store.CATEGORY.categoryList);

console.log(categories)

  return (
    <div>
      <CategoryInput />
      <CategoriesList items={categories}/>
    </div>
  );
}
