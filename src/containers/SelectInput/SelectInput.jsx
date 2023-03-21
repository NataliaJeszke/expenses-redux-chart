import Select from 'react-select';

const SelectInput = ({ options, onChange }) => {
  const handleChange = (option) => {
    onChange(option.value);
  };

  return (
    <Select
      onChange={handleChange}
      options={options}
    />
  );
};

export default SelectInput;