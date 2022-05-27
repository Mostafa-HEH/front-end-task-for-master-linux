import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    display: "inline-flex",
  },

  circul: {
    "&.MuiCircularProgress-root": {
      width: "200px !important",
      height: "200px !important",
    },
  },

  textcontainer: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    "&.MuiTypography-root": {
      fontWeight: "600",
      fontSize: "3.5rem",
    },
  },
}));
