import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../Pages/Login";
import Exam from "../Pages/Exam";

const Result = () => {
  return <div>Result</div>;
};

const Page404 = () => {
  return <div>404 Page Not Found</div>;
};

const PagesRoutes = () => {
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
