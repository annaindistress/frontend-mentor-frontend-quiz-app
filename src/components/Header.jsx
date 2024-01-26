import { PropTypes } from "prop-types";
import QuizzTitle from "./QuizzTitle";
import ThemeToggle from "./ThemeToggle";
import styles from "./Header.module.css";

export default function Header({ theme, setTheme, currentQuizz }) {
  return (
    <header className={styles.header}>
      {currentQuizz?.title && <QuizzTitle name={currentQuizz.title} />}
      <ThemeToggle theme={theme} setTheme={setTheme} />
    </header>
  );
}

Header.propTypes = {
  theme: PropTypes.string,
  setTheme: PropTypes.func,
  currentQuizz: PropTypes.object,
};
