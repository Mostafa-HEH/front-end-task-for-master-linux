import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import Header from "./Header";
import Questions from "./Questions";

import { useStyles } from "./styles";

// Design Inspiration
// https://dribbble.com/shots/7434980-Landing-Quiz/attachments/295833?mode=media

const Exam = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Paper elevation={2} className={classes.questionscontainer}>
        <Header />
        <Questions />
      </Paper>
    </Box>
  );
};

export default Exam;
