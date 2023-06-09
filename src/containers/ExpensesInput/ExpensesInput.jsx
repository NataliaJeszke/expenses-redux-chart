import expensesStyle from "./ExpensesInputStyle.module.css";
import { addExpenseAction } from "../../store/expense/expense-slice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import SelectInput from "../SelectInput/SelectInput";

export function ExpensesInput(props) {
  const catalogue = useSelector((store) => store.CATEGORY.categoryList);

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
      <label className={expensesStyle.expenseLabel} htmlFor="expenseName">
        Add your expense:
      </label>
      <input
        className={expensesStyle.expenseInput}
        type="text"
        id="expenseName"
        placeholder="Ex: Laptop"
        onChange={(event) => setExpenseName(event.target.value)}
      />
      <label className={expensesStyle.expenseLabel} htmlFor="price">
        Cost:
      </label>
      <input
        className={expensesStyle.expenseInput}
        type="number"
        id="price"
        placeholder="Ex: 4000"
        step="any"
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
