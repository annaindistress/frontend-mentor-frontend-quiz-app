import { PropTypes } from "prop-types";
import Info from "./Info";
import Container from "./Container";
import Result from "./Result";
import Button from "./Button";

export default function PageFinal({ quizz, result, dispatch }) {
  return (
    <>
      <Info>
        <h1 className="title">
          Quiz completed <strong>You scored...</strong>
        </h1>
      </Info>
      <Container>
        <Result quizz={quizz} result={result} />
        <Button onClick={() => dispatch({ type: "reset" })}>Play again</Button>
      </Container>
    </>
  );
}

PageFinal.propTypes = {
  quizz: PropTypes.object,
  result: PropTypes.number,
  dispatch: PropTypes.func,
};
