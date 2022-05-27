import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { useStyles } from "./styles";

const Marks = ({marks}) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <CircularProgress
        variant="determinate"
        value={marks}
        color={marks >= 50 ? "success" : "error"}
        className={classes.circul}
      />
      <Box className={classes.textcontainer}>
        <Typography
          component="div"
          color={marks >= 50 ? "success" : "error"}
          className={classes.text}
        >
          {`${marks}%`}
        </Typography>
      </Box>
    </Box>
  );
};

export default Marks;
