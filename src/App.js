import Main from "./Layouts/Main";
import PagesRoutes from "./Routes";

// File structure https://www.xenonstack.com/insights/reactjs-project-structure

// Render pages from routes inside main which can render (header, main, footer, and other)
function App() {
  return (
    <Main>
      <PagesRoutes />
    </Main>
  );
}

export default App;
