import { PropTypes } from "prop-types";
import styles from "./Info.module.css";

export default function Info({ type = "quizz", children }) {
  return (
    <div className={[styles.info, styles[type]].join(" ")}>{children}</div>
  );
}

Info.propTypes = {
  type: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
