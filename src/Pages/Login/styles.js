import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },

  logo: {
    "&.MuiTypography-root": {
      color: theme.palette.common.white,
      fontSize: "3rem",
      margin: "42px 0",
      fontWeight: "600",
      textAlign: "center",
      lineHeight: "44px",
      [theme.breakpoints.down("sm")]: {
        margin: "16px 0",
        fontSize: "2rem",
      },
    },
  },

  form: {
    padding: "64px 32px",
    width: " 100%",
    maxWidth: "600px",
    position: "relative",
    overflow: "hidden",
  },

  loader: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "#f7fbffd9",
    zIndex: "2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  progress: {
    "&.MuiCircularProgress-root": {
      height: "8vw !important",
      width: "8vw !important",
    },
  },

  formwrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    maxWidth: "400px",
    width: "100%",
    margin: "auto",
    textAlign: "center",
  },
}));
