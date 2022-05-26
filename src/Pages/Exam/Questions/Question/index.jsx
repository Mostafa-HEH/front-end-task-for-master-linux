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

const Question = ({ questionData: { id: qsID, question, answers } }) => {
  const [studentAnswer, setStudentAnswer] = useState(NaN);
  const classes = useStyles();

  // toggle beteen questions
  const handleToggle = (answerID) => {
    setStudentAnswer(answerID);
  };

  // Submit Question answer
  const submitAnswer = () => {
    answers.forEach(({ id, correct }) => {
      if (id === studentAnswer && correct) console.log("answer is correct");
    });
  };

  return (
    <Box className={classes.container}>
      <Typography component="h2">{question}</Typography>
      <List disablePadding>
        {[0, 1, 2, 3].map((answer) => (
          <ListItem
            key={answer}
            onClick={() => handleToggle(answers[randomArray[answer]].id)}
            disablePadding
          >
            <ListItemButton dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  disableRipple
                  checked={studentAnswer === answers[randomArray[answer]].id}
                />
              </ListItemIcon>
              <ListItemText primary={answers[randomArray[answer]].answer} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button variant="contained" size="large" onClick={submitAnswer}>
        Next question
      </Button>
    </Box>
  );
};

export default Question;
