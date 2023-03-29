import Select from "react-select";
import catalogue from "../SelectInput/catalogue";

const FilterSelect = ({ selectedCategories, handleCategoryClick }) => {
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
