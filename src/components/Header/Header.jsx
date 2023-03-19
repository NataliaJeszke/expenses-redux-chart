import HeaderStyle from "./Header.style.module.css";
import treeImg from "./img/people.png";
export function Header() {
  return (
    <header className={HeaderStyle.header}>
      <div className={HeaderStyle.headerDiv}>
        <div>
          <div>Welcome</div>
          <div>Expense Tracker</div>
        </div>
        <div>
          <img src={treeImg} alt="tree money image"/>
        </div>
      </div>
    </header>
  );
}
