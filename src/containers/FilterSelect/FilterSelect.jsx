import Select from "react-select";
import { useSelector } from "react-redux";

const FilterSelect = ({ selectedCategories, handleCategoryClick }) => {
  const expenseList = useSelector((store) => store.EXPENSE.expenseList);

  const categoriesSet = new Set(expenseList.map((expense) => expense.category));

  const categories = [...categoriesSet].map((category) => ({
    value: category,
    label: category,
  }));

  return (
    <Select
      closeMenuOnSelect={false}
      isMulti
      options={categories}
      onChange={handleCategoryClick}
      value={selectedCategories.map((category) => ({
        value: category,
        label: category,
      }))}
      className="basic-multi-select"
      classNamePrefix="select"
    />
  );
};

export default FilterSelect;
