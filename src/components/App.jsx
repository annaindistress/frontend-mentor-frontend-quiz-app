import { useEffect } from "react";
import { useColorScheme } from "../hooks/useColorScheme";
import ThemeToggle from "./ThemeToggle";

export default function App() {
  const [theme, setTheme] = useColorScheme();

  useEffect(
    function () {
      document.documentElement.classList = `${theme}-mode`;
    },
    [theme]
  );

  return (
    <>
      <header>
        <p className="quizz-title quizz-title--html">HTML</p>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </header>
    </>
  );
}
