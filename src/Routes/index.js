import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../Pages/Login";
import Exam from "../Pages/Exam";
import Result from "../Pages/Result";
import Page404 from "../Pages/Page404";

const PagesRoutes = () => {
  // Render defferent pages (from /pages) base on routes with react router dom
  return (
    <Router>
      <Routes>
        <Route path="/result" element={<Result />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
};

export default PagesRoutes;
