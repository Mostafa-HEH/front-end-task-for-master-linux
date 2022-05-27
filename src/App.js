import Main from "./Layouts/Main";
import PagesRoutes from "./Routes";

// ====================>From Task<== ============================
// Develop a Single Page Application (SPA) which allows students to enroll into MCQ Exam,
// take the exam, and showing their scores after finishing the exam.

// File structure https://www.xenonstack.com/insights/reactjs-project-structure

// Render pages from routes inside main which can render (header, main, footer, and other)
function App() {
  return (
    <Main>
      <PagesRoutes />
    </Main>
  );
}

// ====================>From Task<== ============================
// • You must use either React.js or Next.js.
// • Use any UI Library available for React.js such as Material UI, Chakra UI, …
// • React Components must be written using React Hooks (Class-based Components
// NOT allowed).
// • You must use Redux or React Context for the State Management.
// • The application must have 3 routes: Login, Exam, Result. (Use your favorite Routing
// Library)
// • The application must have a fully responsive layout.

export default App;
