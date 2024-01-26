import { PropTypes } from "prop-types";
import styles from "./Button.module.css";

export default function Button({ onClick, children }) {
  return (
    <>
      <button type="button" className={styles.button} onClick={onClick}>
        {children}
      </button>
    </>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
