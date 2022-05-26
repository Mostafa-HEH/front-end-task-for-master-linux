import { Fragment } from "react";

import { useStyles } from "./styles";

const Main = ({ children }) => {
  const classes = useStyles();
  return (
    <Fragment>
      {/* Here Header, Footer, Sidebar and any consistans component */}
      <main className={classes.main}>{children}</main>
    </Fragment>
  );
};

export default Main;
