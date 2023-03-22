export function FilterButtons({ onCategoryClick, onClearFilter }) {
    return (
      <div>
        <button onClick={() => onCategoryClick("housing")}>Housing</button>
        <button onClick={() => onCategoryClick("food")}>Food</button>
        <button onClick={() => onCategoryClick("transportation")}>
          Transportation
        </button>
        <button onClick={() => onCategoryClick("clothing")}>Clothing</button>
        <button onClick={() => onCategoryClick("medical")}>Medical</button>
        <button onClick={() => onCategoryClick("personal")}>Personal</button>
        <button onClick={onClearFilter}>Clear Filter</button>
      </div>
    );
  }
