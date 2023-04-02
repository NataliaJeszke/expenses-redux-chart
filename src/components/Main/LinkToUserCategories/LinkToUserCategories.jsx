import linkStyle from "./LinkToUserCategoriesStyle.module.css"

export function LinkToUserCategories() {
  return (
    <div>
      <a href="#addCategory">
        <button className={linkStyle.buttonLink}>Click to add your category</button>
      </a>
    </div>
  );
}
