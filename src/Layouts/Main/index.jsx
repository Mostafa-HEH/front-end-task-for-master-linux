import { Fragment } from "react";

const Main = ({ children }) => {
  return (
    <Fragment>
      {/* Here Header, Footer, Sidebar and any consistans component */}
      <main>{children}</main>
    </Fragment>
  );
};

export default Main;
