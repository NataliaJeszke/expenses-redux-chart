import { Categories } from "./Categories/Categories";
import { ExpensesContainer } from "../../containers/ExpensesContainer/ExpensesContainer";
import { Chart } from "../Chart/Chart";
import { InputSection } from "./InputSection/InputSection";
import mainStyle from "./MainStyle.module.css";
import { LinkToUserCategories } from "./LinkToUserCategories/LinkToUserCategories";
import { useState } from "react";

export function Main() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryClick = (categories) => {
    const values = categories.map((option) => option.value);
    setSelectedCategories(values);
  };

  return (
    <>
      <div className={mainStyle.main}>
        <InputSection />
        <LinkToUserCategories />
        <div className={mainStyle.main_ex_chart}>
          <ExpensesContainer
            selectedCategories={selectedCategories}
            handleCategoryClick={handleCategoryClick}
          />
          <Chart />
        </div>
        <Categories />
      </div>
    </>
  );
}
