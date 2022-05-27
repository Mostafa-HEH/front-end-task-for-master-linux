import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import Marks from "./Marks";

import { useStyles } from "./styles";

// Designs Insperation
// https://dribbble.com/shots/14598973-Examica-Results

const Result = () => {
  const classes = useStyles();
  const [marks, setMarks] = useState(100);

  return (
    <Box className={classes.container}>
      <Paper elevation={2} className={classes.subcontainer}>
        <Box className={classes.headcontainer}>
          <Typography className={classes.heading}>
            {marks >= 50
              ? "Congratulations, Mostafa!"
              : "Ops, Maybe you try again later!"}
          </Typography>
          <Typography className={classes.subhead}>
            {marks >= 50
              ? "You have correctly answered 7 from 7"
              : "You have badly answered 3 from 7"}
          </Typography>
        </Box>
        <Marks marks={marks} />
      </Paper>
    </Box>
  );
};

export default Result;
