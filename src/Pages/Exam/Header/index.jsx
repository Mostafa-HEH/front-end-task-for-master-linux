import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Divider from "@mui/material/Divider";

import { useStyles } from "./styles";

const Header = ({ curentQuestion }) => {
  const classes = useStyles();
  const [prs, setPrs] = useState(0);

  useEffect(() => {
    setPrs(Math.floor((curentQuestion / 7) * 100));
  }, [curentQuestion]);

  return (
    <Box component="header" className={classes.header}>
      <Box className={classes.top}>
        <Typography component="h2" className={classes.logo}>
          Master Linux
        </Typography>
        <Box className={classes.progresscontainer}>
          <Typography component="h6" className={classes.progress}>
            Total Quiz: {prs}% completed
          </Typography>
          <LinearProgress variant="determinate" value={prs} />
        </Box>
      </Box>
      <Divider className={classes.divider} />
      <Box className={classes.bottom}>
        <Typography component="p" className={classes.leftanswers}>
          {6 - curentQuestion} answers left
        </Typography>
        <Typography component="p" className={classes.studentname}>
          Welcome Mostafa
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
