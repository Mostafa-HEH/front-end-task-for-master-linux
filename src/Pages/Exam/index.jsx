import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { connect } from "react-redux";

import Header from "./Header";
import Questions from "./Questions";

import { useStyles } from "./styles";

// Design Inspiration
// https://dribbble.com/shots/7434980-Landing-Quiz/attachments/295833?mode=media

const Exam = ({ userData }) => {
  const classes = useStyles();
  // current question is
  const [curentQuestion, setCurentQuestion] = useState(0);

  return (
    <Box className={classes.container}>
      <Paper elevation={2} className={classes.questionscontainer}>
        <Header curentQuestion={curentQuestion} username={userData.name} />
        <Questions setCurentQuestion={setCurentQuestion} />
      </Paper>
    </Box>
  );
};

const MoveStateToProps = (state) => {
  return state;
};

export default connect(MoveStateToProps)(Exam);
