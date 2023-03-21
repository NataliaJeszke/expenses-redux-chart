import AppStyle from "./AppStyle.module.css";
import { Header } from "./components/Header/Header";
import { InputSection } from "./components/Main/InputSection/InputSection";
import { Main } from "./components/Main/Main";

export function App() {
  return (
    <>
      <Header />
      <InputSection />
      <Main />
    </>
  );
}
