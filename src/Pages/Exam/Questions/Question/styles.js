import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "42px",
    display: "flex",
    flexDirection: "column",
    gap: "32px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "16px",
    },
  },

  listItem: {
    border: `2px solid ${theme.palette.primary.main}`,
    margin: "8px 0",
  },

  question: {
    fontSize: "1.5rem !important",
    fontWeight: "600 !important",
  },

  button: {
    "&.MuiButton-root": {
      alignSelf: "flex-end",
    },
  },

  icon: {
    "&.MuiListItemIcon-root": {
      justifyContent: "center",
    },
  },

  listtext: {
    "&.MuiListItemText-root .MuiTypography-root": {
      fontWeight: "500",
      fontSize: "1rem",
    },
  },
}));
