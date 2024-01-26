import { PropTypes } from "prop-types";
import QuizzTitle from "./QuizzTitle";
import styles from "./Result.module.css";

export default function Result({ quizz, result }) {
  return (
    <p className={styles.result}>
      {quizz?.title && <QuizzTitle name={quizz.title} />}
      <span className={styles.text}>
        <span className={styles.number}>{result}</span> out of{" "}
        {quizz.questions?.length}
      </span>
    </p>
  );
}

Result.propTypes = {
  quizz: PropTypes.object,
  result: PropTypes.number,
};
