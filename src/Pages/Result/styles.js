import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
    padding: "32px 0",
    minHeight: "100vh",
  },

  subcontainer: {
    padding: "64px 32px",
    width: " 100%",
    maxWidth: "600px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "32px",
  },

  headcontainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: "8px",
  },

  heading: {
    "&.MuiTypography-root": {
      fontWeight: "600",
      fontSize: "2rem",
      textAlign: "center",
    },
  },
}));
