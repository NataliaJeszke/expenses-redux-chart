import { addCategoryAction } from "../../store/category/category-slice";
import { useDispatch } from "react-redux";
import { useState } from "react";

export function CategoryInput() {
  const dispatch = useDispatch();

  const [value, setValue] = useState();
  const [label, setLabel] = useState();

  function submit(event) {
    event.preventDefault();
    dispatch(
      addCategoryAction({
        value,
        label,
      })
    );
  }

  return (
    <form onSubmit={submit} id="addCategory">
      <label htmlFor="categoryValue">Add Category:</label>
      <input
        type="text"
        id="categoryValue"
        placeholder="education"
        onChange={(event) => {
          setValue(event.target.value.toLowerCase());
          setLabel(
            event.target.value.charAt(0).toUpperCase() +
              event.target.value.slice(1).toLowerCase()
          );
        }}
      />
      <button type="submit" value="Submit">
        Add
      </button>
    </form>
  );
}
