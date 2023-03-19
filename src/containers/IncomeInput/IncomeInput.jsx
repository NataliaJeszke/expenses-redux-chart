export function IncomeInput() {
  return (
    <form>
      <label>
        Add your income
        <input
          type="number"
        //   onChange={(event) => setIncome(event.target.value)}
        />
      </label>
      <button
        type="submit"
        value="Submit"
      >
        Add
      </button>
    </form>
  );
}
