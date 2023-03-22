import Select, { components, PlaceholderProps } from 'react-select';
import selectStyle from "./SelectInputStyle.module.css"



const SelectInput = ({ options, onChange }) => {
  const handleChange = (option) => {
    onChange(option.value);
  };

  // const select_input = {
  //   control: (provided, state) => ({
  //     ...provided,
  //     height: 29,
  //     margin: 10,
  //     width: 200,
  //     paddingBottom:0,
  //     display: "flex",
  //     justifyContent: "center",
  //     alignItems: "center",
  //     textAlign: "center",
  //   }),
  //   placeholder: (provided, state) => ({
  //     ...provided,
  //     lineHeight: "5px",
  //   }),
  // };

  return (
    <div className={selectStyle.selectContainer}> <Select
    onChange={handleChange}
    options={options}
    styles={{
      placeholder: (base) => ({
        ...base,
        fontSize: '1em',
        fontWeight: 400,
        textAlign:'center',
        marginBottom: '10px'

      }),
      control: (provided, state) => ({
            ...provided,
            height: 20,
            width: 200,
      }),
    }}
    placeholder="Select Category"
  /></div>
   
  );
};

export default SelectInput;
