import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Divider from "@mui/material/Divider";

import { useStyles } from "./styles";

const Header = () => {
  const classes = useStyles();

  return (
    <Box component="header" className={classes.header}>
      <Box className={classes.top}>
        <Typography component="h2" className={classes.logo}>
          Master Linux
        </Typography>
        <Box className={classes.progresscontainer}>
          <Typography component="h6" className={classes.progress}>
            Total Quiz: {`${10}`}% completed
          </Typography>
          <LinearProgress variant="determinate" value={10} />
        </Box>
      </Box>
      <Divider className={classes.divider} />
      <Box className={classes.bottom}>
        <Typography className={classes.leftanswers}>6 answers left</Typography>
      </Box>
    </Box>
  );
};

export default Header;
