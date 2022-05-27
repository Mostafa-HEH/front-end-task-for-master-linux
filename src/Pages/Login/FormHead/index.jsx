import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useStyles } from "./styles";

const FormHead = () => {
  const classes = useStyles();

  return (
    <Box className={classes.head}>
      <Typography component="h5" className={classes.title}>
        Hello There!
      </Typography>
      <Typography component="h6" className={classes.subtitle}>
        Enter your credentials to enroll exam
      </Typography>
    </Box>
  );
};

export default FormHead;
