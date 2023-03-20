export function ExpenseInput() {
    function submit(event){
        event.preventDefault();
        console.log("submitExpenses")
    }
    return (
      <form onSubmit={submit}>
        <label>
          Add your expense
          <input
            type="text"
          //   onChange={(event) => setIncome(event.target.value)}
          />
        </label>
        <label>
          Cost
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
  