import { addExpenseAction } from "../../store/expense/expense-slice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import SelectInput from "../SelectInput/SelectInput";
import catalogue from "../SelectInput/catalogue";

export function ExpensesInput(props) {
  const dispatch = useDispatch();

  const [price, setPrice] = useState();
  const [expenseName, setExpenseName] = useState();
  const [id, setId] = useState();
  const [selectedOption, setSelectedOption] = useState();

  function submit(event) {
    event.preventDefault();
    dispatch(
      addExpenseAction({
        name: expenseName,
        price: price,
        id: id,
        category: selectedOption,
      })
    );
  }

  return (
    <form onSubmit={submit}>
      <label>
        Add your expense
        <input
          type="text"
          placeholder="Ex: Laptop"
          onChange={(event) => setExpenseName(event.target.value)}
        />
      </label>
      <label>
        Cost
        <input
          type="number"
          placeholder="Ex: 4000"
          onChange={(event) => setPrice(event.target.value)}
        />
      </label>
      <SelectInput
        options={catalogue}
        onChange={(value) => setSelectedOption(value)}
      />
      <button type="submit" value="Submit" onClick={() => setId(nanoid())}>
        Add
      </button>
    </form>
  );
}
