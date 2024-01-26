import { useEffect, useReducer } from "react";
import { useColorScheme } from "../hooks/useColorScheme";
import Header from "./Header";
import Main from "./Main";
import PageStart from "./PageStart";
import PageQuestion from "./PageQuestion";
import PageFinal from "./PageFinal";

import data from "../assets/data.json";

const initialState = {
  quizzes: data.quizzes,
  status: "start",
  quizz: {},
  id: 0,
  selected: "",
  isError: false,
  isChecked: false,
  result: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "selectQuizz":
      return { ...state, status: "active", quizz: action.payload };
    case "showError":
      return { ...state, isError: true };
    case "selectAnswer":
      return { ...state, selected: action.payload, isError: false };
    case "showAnswer":
      return { ...state, isChecked: true };
    case "nextQuestion":
      return {
        ...state,
        id: state.id + 1,
        selected: "",
        isError: false,
        isChecked: false,
        result: state.result + action.payload,
      };
    case "final":
      return {
        ...state,
        status: "final",
        result: state.result + action.payload,
      };
    case "reset":
      return initialState;
    default:
      throw new Error("Unknown action");
  }
}

export default function App() {
  const [theme, setTheme] = useColorScheme();
  const [
    { quizzes, status, quizz, id, selected, isError, isChecked, result },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(
    function () {
      document.documentElement.classList = `${theme}-mode`;
    },
    [theme]
  );

  return (
    <>
      <Header theme={theme} setTheme={setTheme} quizz={quizz} />
      <Main>
        {status === "start" && (
          <PageStart quizzes={quizzes} dispatch={dispatch} />
        )}
        {status === "active" && (
          <PageQuestion
            quizz={quizz}
            id={id}
            selected={selected}
            isError={isError}
            isChecked={isChecked}
            dispatch={dispatch}
          />
        )}
        {status === "final" && (
          <>
            {console.log(quizz)}
            <PageFinal quizz={quizz} result={result} dispatch={dispatch} />
          </>
        )}
      </Main>
    </>
  );
}
