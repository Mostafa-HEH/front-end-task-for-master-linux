// ====================>From Task<== ============================
// • No need to create database, backend, … Just keep questions and answers in arrays
// or objects.

export const QUESTIONS_DATA = [
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
        answer: "Both var and let",
        correct: true,
      },
      {
        id: 4,
        answer: "None of them",
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
        answer: "Both getElementbyId() and getElementsByClassName()",
        correct: true,
      },
      {
        id: 4,
        answer: "None of them",
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
        answer: "All of them",
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
        answer: "None of them.",
        correct: false,
      },
    ],
  },
];
