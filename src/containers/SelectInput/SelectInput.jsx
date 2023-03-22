import Select from "react-select";
const SelectInput = ({ options, onChange }) => {
  const handleChange = (option) => {
    onChange(option.value);
  };

  const select_input = {
    control: (provided, state) => ({
      ...provided,
      height: 29,
      margin: 19,
      width: 200,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      lineHeight: "10px",
    }),
    placeholder: (provided, state) => ({
      ...provided,
      lineHeight: "10px",
    }),
  };

  return (
    <Select
      onChange={handleChange}
      options={options}
      styles={select_input}
      placeholder="Select Category"
    />
  );
};

export default SelectInput;
