// import { useSelector } from "react-redux";
// import { useState } from "react";

// export function FilterCategory() {
//   const expenseList = useSelector((store) => store.EXPENSE.expenseList);
//   const [selectedCategory, setSelectedCategory] = useState();

//   const filteredExpenses = selectedCategory
//     ? expenseList.filter((expense) => expense.category === selectedCategory)
//     : expenseList;

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//   };

//   return (
//     <>
//       <div>
//         <button onClick={() => handleCategoryClick("housing")}>Housing</button>
//         <button onClick={() => handleCategoryClick("food")}>Food</button>
//         <button onClick={() => handleCategoryClick("transportation")}>
//           Transportation
//         </button>
//         <button onClick={() => handleCategoryClick("clothing")}>
//           Clothing
//         </button>
//         <button onClick={() => handleCategoryClick("medical")}>Medical</button>
//         <button onClick={() => handleCategoryClick("personal")}>
//           Personal
//         </button>
//         <button onClick={() => setSelectedCategory()}>Clear Filter</button>
//       </div>
//     </>
//   );
// }
