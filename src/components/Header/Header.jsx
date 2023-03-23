import HeaderStyle from "./Header.style.module.css";
import treeImg from "./img/header.png";
export function Header() {
  return (
    <header className={HeaderStyle.header}>
      <div className={HeaderStyle.headerDiv}>
        <div className={HeaderStyle.textContainer}>
          <div className={HeaderStyle.texts}>
            <div><h1 className={HeaderStyle.h1}>Budget Tracker</h1></div>
          </div>
          <div className={HeaderStyle.text}>
            <h2 className={HeaderStyle.h2}>Keep up with your expenses</h2>
          </div>
        </div>
        <div>
          <img src={treeImg} alt="tree money image" />
        </div>
      </div>
    </header>
  );
}
