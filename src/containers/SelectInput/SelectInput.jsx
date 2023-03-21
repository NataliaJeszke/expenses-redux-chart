import Select from 'react-select';
const SelectInput = ({ options, onChange }) => {
  const handleChange = (option) => {
    onChange(option.value);
  };

  const select_input={
    control: (styles) =>({...styles, height: 29, margin:19, width: 200})
  }

  return (
    <Select
      onChange={handleChange}
      options={options}
      styles={select_input}
    />
  );
};

export default SelectInput;