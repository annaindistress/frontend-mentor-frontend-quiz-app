import { PropTypes } from "prop-types";
import Info from "./Info";
import Option from "./Option";
import QuizzTitle from "./QuizzTitle";

export default function PageStart({ quizzes, dispatch }) {
  return (
    <>
      <Info>
        <h1 className="title">
          Welcome to the <strong>Frontend Quiz!</strong>
        </h1>
        <p className="tip">Pick a subject to get started.</p>
      </Info>
      <ul className="list">
        {quizzes.map((quizz) => (
          <li key={quizz.title}>
            <Option
              onClick={() => dispatch({ type: "selectQuizz", payload: quizz })}
            >
              <QuizzTitle name={quizz.title} />
            </Option>
          </li>
        ))}
      </ul>
    </>
  );
}

PageStart.propTypes = {
  quizzes: PropTypes.array,
  dispatch: PropTypes.func,
};
