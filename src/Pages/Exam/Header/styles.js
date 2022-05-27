import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    flexDirection: "column",
  },

  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: "16px",
    },
  },

  bottom: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logo: {
    fontWeight: "600 !important",
    fontSize: "1.3rem !important",
  },

  progresscontainer: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  progress: {
    "&.MuiTypography-root": {
      fontWeight: "800",
      textTransform: "uppercase",
      fontSize: "0.8rem",
    },
  },

  divider: {
    "&.MuiDivider-root": {
      margin: "16px 0",
    },
  },

  leftanswers: {
    "&.MuiTypography-root": {
      fontWeight: "800",
      textTransform: "uppercase",
      fontSize: "0.8rem",
    },
  },

  studentname: {
    "&.MuiTypography-root": {
      fontWeight: "800",
      textTransform: "uppercase",
      fontSize: "0.8rem",
    },
  },
}));
