import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Question from "./Question";
import { QUESTIONS_DATA } from "../../../Utils/data/questions-data";
import { randomArrayGenerator } from "../../../Utils/common/random-array-generator";

// ====================>From Task<== ============================
// Each exam contains 7 questions (must be rendered in a random order).

// Random array generator function
const randomArray = randomArrayGenerator(7);

const Questions = ({ setCurentQuestion }) => {
  // change index for randomArray to get question unige index
  const [questionNum, setQuestionNum] = useState(0);

  // change route
  const navigate = useNavigate();

  // change qustion to next
  const handleQuestionChange = () => {
    // if question finished do this
    if (questionNum === 6) navigate("/result");

    // else get me next one
    setQuestionNum((prev) => prev + 1);

    // get question number for exam component
    setCurentQuestion(questionNum + 1);
  };

  // ====================>From Task<== ============================
  // After successful enrollment, student should find his/her first question.

  return (
    <Question
      questionData={QUESTIONS_DATA[randomArray[questionNum]]}
      handleQuestionChange={handleQuestionChange}
      questionNum={questionNum}
    />
  );
};

export default Questions;
