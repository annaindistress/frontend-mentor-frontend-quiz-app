import { PropTypes } from "prop-types";
import styles from "./QuizzTitle.module.css";

export default function QuizzTitle({ name }) {
  return (
    <span className={[styles.title, styles[name.toLowerCase()]].join(" ")}>
      {name}
    </span>
  );
}

QuizzTitle.propTypes = {
  name: PropTypes.string,
};
