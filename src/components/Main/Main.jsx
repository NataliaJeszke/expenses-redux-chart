import { ExpensesContainer } from "../../containers/ExpensesContainer/ExpensesContainer";
import { FilterButtons } from "./FilterButtons/FilterButtons";
import { InputSection } from "./InputSection/InputSection";

export function Main() {
  return (
    <>
      <InputSection />
      <ExpensesContainer />
    </>
  );
}
