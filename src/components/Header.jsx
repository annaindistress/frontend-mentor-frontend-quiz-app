import { PropTypes } from "prop-types";
import QuizzTitle from "./QuizzTitle";
import ThemeToggle from "./ThemeToggle";
import styles from "./Header.module.css";

export default function Header({ theme, setTheme, quizz }) {
  return (
    <header className={styles.header}>
      {quizz?.title && <QuizzTitle name={quizz.title} />}
      <ThemeToggle theme={theme} setTheme={setTheme} />
    </header>
  );
}

Header.propTypes = {
  theme: PropTypes.string,
  setTheme: PropTypes.func,
  quizz: PropTypes.object,
};
