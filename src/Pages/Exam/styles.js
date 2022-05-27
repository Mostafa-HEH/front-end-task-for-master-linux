import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  questionscontainer: {
    padding: "64px 32px",
    width: " 100%",
    maxWidth: "900px",

    [theme.breakpoints.down("sm")]: {
      padding: "16px 32px",
    },
  },
}));
