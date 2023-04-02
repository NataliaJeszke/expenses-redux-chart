import Select from "react-select";
import { useSelector } from "react-redux";



const FilterSelect = ({ selectedCategories, handleCategoryClick }) => {
  const catalogue = useSelector((store)=>store.CATEGORY.categoryList);
  
  return (
    <Select
      closeMenuOnSelect={false}
      isMulti
      options={catalogue}
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
