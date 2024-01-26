import { PropTypes } from "prop-types";
import Info from "./Info";
import Container from "./Container";
import Option from "./Option";
import Button from "./Button";

export default function PageQuestion({
  quizz,
  id,
  selected,
  isError,
  isChecked,
  dispatch,
}) {
  const numQuestions = quizz.questions.length;
  const current = quizz.questions[id];

  function handleSubmit() {
    if (isChecked) {
      if (numQuestions === id + 1) {
        dispatch({
          type: "final",
          payload: Number(selected === current.answer),
        });
      } else {
        dispatch({
          type: "nextQuestion",
          payload: Number(selected === current.answer),
        });
      }

      return;
    }

    if (!selected) {
      dispatch({ type: "showError" });
      return;
    }

    dispatch({ type: "showAnswer" });
  }

  return (
    <>
      <Info type="question">
        <p className="tip">
          Question {id + 1} of {numQuestions}
        </p>
        <h1 className="subtitle">{current.question}</h1>
        <progress className="progress" max={numQuestions} value={id + 1} />
      </Info>
      <Container>
        <ul className="list">
          {current.options.map((option, index) => (
            <li key={option}>
              <Option
                isActive={selected === option}
                isRight={isChecked && current.answer === option}
                isWrong={
                  isChecked && selected === option && current.answer !== option
                }
                isChecked={isChecked}
                questionNum={index}
                onClick={() =>
                  dispatch({ type: "selectAnswer", payload: option })
                }
              >
                {option}
              </Option>
            </li>
          ))}
        </ul>
        <Button onClick={handleSubmit}>
          {isChecked ? "Next question" : "Submit answer"}
        </Button>
        {isError && <p className="error">Please select an answer</p>}
      </Container>
    </>
  );
}

PageQuestion.propTypes = {
  quizz: PropTypes.object,
  id: PropTypes.number,
  selected: PropTypes.string,
  isError: PropTypes.bool,
  isChecked: PropTypes.bool,
  dispatch: PropTypes.func,
};
