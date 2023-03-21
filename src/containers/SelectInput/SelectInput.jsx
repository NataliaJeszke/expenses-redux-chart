import Select from "react-select";
const SelectInput = ({ options, onChange }) => {
  const handleChange = (option) => {
    onChange(option.value);
  };

  const select_input = {
    control: (provided, state) => ({
      ...provided,
      height: 29, // set the height of the control
      margin: 19,
      width: 200,
      display: "flex", // set display to flex
      justifyContent: "center", // center content horizontally
      alignItems: "center",
      textAlign: "center",
      lineHeight: '10px', // set the line-height to be equal to the height of the control
    }),
    placeholder: (provided, state) => ({
      ...provided,
      lineHeight: '10px', // set the line-height to be equal to the height of the control
    }),

  };

  return (
    <Select onChange={handleChange} options={options} styles={select_input} placeholder="Select Category" />
  );
};

export default SelectInput;
