import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  head: {
    marginBottom: "24px",
  },

  title: {
    "&.MuiTypography-root": {
      fontWeight: "600 ",
      fontSize: "2rem ",
    },
  },
}));
