import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { connect } from "react-redux";

import { studentScore } from "../../../../Services/Actions";

import { useStyles } from "./styles";

// random array for answers
let randomArray = [];
// push random number which isn't in the array
while (randomArray.length !== 4) {
  // assign randome number from 0 to 3
  let randomNumber = Math.floor(Math.random() * 4);

  // if randome number isn't in ther array push it
  if (!randomArray.includes(randomNumber)) randomArray.push(randomNumber);
}

const Question = ({
  questionData,
  handleQuestionChange,
  studentScore,
  questionNum,
}) => {
  const [studentAnswer, setStudentAnswer] = useState(NaN);
  const classes = useStyles();

  // toggle beteen questions
  const handleToggle = (answerID) => {
    setStudentAnswer(answerID);
  };

  // Submit Question answer
  const submitAnswer = () => {
    if (questionData.answers[studentAnswer - 1].correct) studentScore();

    // change question
    if (studentAnswer) handleQuestionChange();

    // uncheched
    setStudentAnswer(NaN);
  };

  return (
    <Box className={classes.container}>
      <Typography component="h2" className={classes.question}>
        {questionData.question}
      </Typography>
      <List disablePadding>
        {[0, 1, 2, 3].map((answer) => (
          <ListItem
            key={answer}
            onClick={() =>
              handleToggle(questionData.answers[randomArray[answer]].id)
            }
            disablePadding
            className={classes.listItem}
          >
            <ListItemButton dense>
              <ListItemIcon className={classes.icon}>
                <Checkbox
                  edge="start"
                  disableRipple
                  checked={
                    studentAnswer ===
                    questionData.answers[randomArray[answer]].id
                  }
                />
              </ListItemIcon>
              <ListItemText
                primary={questionData.answers[randomArray[answer]].answer}
                className={classes.listtext}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {studentAnswer ? (
        <Button
          variant="contained"
          size="large"
          onClick={submitAnswer}
          className={classes.button}
        >
          {questionNum === 6 ? "Finish" : "Next question"}
        </Button>
      ) : null}
    </Box>
  );
};

export default connect(null, { studentScore })(Question);
