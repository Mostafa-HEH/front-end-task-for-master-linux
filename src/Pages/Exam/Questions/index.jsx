import { useState } from "react";

import Question from "./Question";

const QUESTIONS_DATA = [
  {
    id: 1,
    question: "Javascript is an _______ language?",
    answers: [
      {
        id: 1,
        answer: "Object-Oriented",
        correct: true,
      },
      {
        id: 2,
        answer: "Object-Based",
        correct: false,
      },
      {
        id: 3,
        answer: "Procedural",
        correct: false,
      },
      {
        id: 4,
        answer: "None of the above",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question:
      "Which of the following keywords is used to define a variable in Javascript?",
    answers: [
      {
        id: 1,
        answer: "var",
        correct: false,
      },
      {
        id: 2,
        answer: "let",
        correct: false,
      },
      {
        id: 3,
        answer: "Both A and B",
        correct: true,
      },
      {
        id: 4,
        answer: "None of the above",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question:
      "Which of the following methods is used to access HTML elements using Javascript?",
    answers: [
      {
        id: 1,
        answer: "getElementbyId()",
        correct: false,
      },
      {
        id: 2,
        answer: "getElementsByClassName()",
        correct: false,
      },
      {
        id: 3,
        answer: "Both A and B",
        correct: true,
      },
      {
        id: 4,
        answer: "None of the above",
        correct: false,
      },
    ],
  },
  {
    id: 4,
    question:
      "Upon encountering empty statements, what does the Javascript Interpreter do?",
    answers: [
      {
        id: 1,
        answer: "Throws an error",
        correct: false,
      },
      {
        id: 2,
        answer: "Ignores the statements",
        correct: true,
      },
      {
        id: 3,
        answer: "Gives a warning",
        correct: false,
      },
      {
        id: 4,
        answer: "None of the above",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question:
      "Which of the following methods can be used to display data in some form using Javascript?",
    answers: [
      {
        id: 1,
        answer: "document.write()",
        correct: false,
      },
      {
        id: 2,
        answer: "console.log()",
        correct: false,
      },
      {
        id: 3,
        answer: "window.alert()",
        correct: false,
      },
      {
        id: 4,
        answer: "All of the above",
        correct: true,
      },
    ],
  },
  {
    id: 6,
    question: "How can a datatype be declared to be a constant type?",
    answers: [
      {
        id: 1,
        answer: "const",
        correct: true,
      },
      {
        id: 2,
        answer: "var",
        correct: false,
      },
      {
        id: 3,
        answer: "let",
        correct: false,
      },
      {
        id: 4,
        answer: "constant",
        correct: false,
      },
    ],
  },
  {
    id: 7,
    question:
      "When the switch statement matches the expression with the given labels, how is the comparison done?",
    answers: [
      {
        id: 1,
        answer:
          "Both the datatype and the result of the expression are compared.",
        correct: true,
      },
      {
        id: 2,
        answer: "Only the datatype of the expression is compared.",
        correct: false,
      },
      {
        id: 3,
        answer: "Only the value of the expression is compared.",
        correct: false,
      },
      {
        id: 4,
        answer: "None of the above.",
        correct: false,
      },
    ],
  },
];

// random array for answers
let randomArray = [];

// push random number which isn't in the array
while (randomArray.length !== 7) {
  // assign randome number from 0 to 7
  let randomNumber = Math.floor(Math.random() * 7);

  // if randome number isn't in ther array push it
  if (!randomArray.includes(randomNumber)) randomArray.push(randomNumber);
}

const Questions = ({ setCurentQuestion }) => {
  // change index for randomArray to get question unige index
  const [questionNum, setQuestionNum] = useState(0);

  // change qustion to next
  const handleQuestionChange = () => {
    // if question finished do this
    if (questionNum === 6) return;

    // else get me next one
    setQuestionNum((prev) => prev + 1);

    // get question number for exam component
    setCurentQuestion(questionNum + 1);
  };

  return (
    <Question
      questionData={QUESTIONS_DATA[randomArray[questionNum]]}
      handleQuestionChange={handleQuestionChange}
    />
  );
};

export default Questions;
