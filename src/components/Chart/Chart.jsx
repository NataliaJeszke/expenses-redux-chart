import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import ChartStyle from "./ChartStyle.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export function Chart() {
  const expenseList = useSelector((store) => store.EXPENSE.expenseList);

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
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#3cba9f",
          "#e8c3b9",
          "#c45850",
          "#7FB3D5",
          "#F7EFCF",
          "#C7DC5B",
          "#FF7F00",
        ].slice(0, categories.length),
      },
    ],
  };

  return (
    <div className={ChartStyle.mainChart}>
      <h2>Your expenses by category</h2>
      <Pie data={data} />
    </div>
  );
}
