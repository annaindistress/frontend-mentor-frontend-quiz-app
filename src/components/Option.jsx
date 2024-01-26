import { PropTypes } from "prop-types";
import styles from "./Option.module.css";

export default function Option({
  isActive = false,
  isRight = false,
  isWrong = false,
  isChecked = false,
  questionNum = null,
  onClick,
  children,
}) {
  return (
    <>
      <button
        type="button"
        className={[
          styles.option,
          styles[questionNum !== null ? "question" : ""],
          styles[isActive && "active"],
          styles[isRight && "right"],
          styles[isWrong && "wrong"],
        ].join(" ")}
        disabled={isChecked}
        onClick={onClick}
      >
        {questionNum !== null && (
          <span className={styles.icon}>
            {String.fromCharCode(questionNum + 65)}
          </span>
        )}
        {children}
      </button>
    </>
  );
}

Option.propTypes = {
  isActive: PropTypes.bool,
  isRight: PropTypes.bool,
  isWrong: PropTypes.bool,
  isChecked: PropTypes.bool,
  questionNum: PropTypes.number,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
