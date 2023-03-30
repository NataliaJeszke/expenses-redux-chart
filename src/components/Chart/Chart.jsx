import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import ChartStyle from "./ChartStyle.module.css";
ChartJS.register(ArcElement, Tooltip, Legend);

export function Chart() {
  const expenseList = useSelector((store) => store.EXPENSE.expenseList);

  const filteredExpenses = useSelector(
    (store) => store.EXPENSE.filteredExpenses
  );

  console.log("to sa filtered expenses" + filteredExpenses);

  const categoriesSet = new Set(expenseList.map((expense) => expense.category));

  const categories = [...categoriesSet];

  const data = {
    labels: categories,
    datasets: [
      {
        data: categories.map((category) => {
          const total = expenseList
            .filter((expense) => expense.category === category)
            .reduce(
              (accumulator, currentExpense) =>
                accumulator + parseFloat(currentExpense.price),
              0
            );

          return total;
        }),
        backgroundColor: [
          "#e3369f",
          "#8a2be2",
          "#97bbe8",
          "#3cba9f",
          "#fff261",
          "#c45850",
          "#7FB3D5",
        ].slice(0, categories.length),
      },
    ],
  };

  return (
    <div className={ChartStyle.mainChart}>
      <h2>Your &#960; chart</h2>

      <Pie
        data={data}
        options={{
          plugins: {
            legend: {
              labels: {
                color: "white",
              },
            },
          },
        }}
      />
    </div>
  );
}
