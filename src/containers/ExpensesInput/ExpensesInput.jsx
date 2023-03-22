import expensesStyle from "./ExpensesInputStyle.module.css";
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
    <form onSubmit={submit} className={expensesStyle.expenseForm}>
      <label htmlFor="expenseName">Add your expense:</label>
      <input
        type="text"
        id="expenseName"
        placeholder="Ex: Laptop"
        onChange={(event) => setExpenseName(event.target.value)}
      />
      <label htmlFor="price">Cost:</label>
      <input
        type="number"
        id="price"
        placeholder="Ex: 4000"
        onChange={(event) => setPrice(event.target.value)}
      />
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
