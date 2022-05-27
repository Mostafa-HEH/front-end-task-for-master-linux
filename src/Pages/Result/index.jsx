import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { connect } from "react-redux";

import Marks from "./Marks";

import { useStyles } from "./styles";

// Designs Insperation
// https://dribbble.com/shots/14598973-Examica-Results

const Result = ({ userData, studentScore }) => {
  const classes = useStyles();
  const [marks, setMarks] = useState(0);

  useEffect(() => {
    setMarks(Math.floor((studentScore / 7) * 100));
  }, [studentScore]);

  // ====================>From Task<== ============================
  //   • Once the student finishes all questions, the application must show his/her score in
  // percentage (%).

  return (
    <Box className={classes.container}>
      <Paper elevation={2} className={classes.subcontainer}>
        <Box className={classes.headcontainer}>
          <Typography className={classes.heading}>
            {marks >= 50
              ? `Congratulations, ${userData.name}!`
              : `Ops,${userData.name} maybe you try again later!`}
          </Typography>
          <Typography className={classes.subhead}>
            {marks >= 50
              ? `You have correctly answered ${studentScore} from 7`
              : `You have badly answered ${studentScore} from 7`}
          </Typography>
        </Box>
        <Marks marks={marks} />
      </Paper>
    </Box>
  );
};

const moveStateToProps = (state) => {
  return state;
};

export default connect(moveStateToProps)(Result);
