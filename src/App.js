import { GlobalStyle } from "./styles/globalStyles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Issues from "./pages/Issues";
import IssuesDetail from "./pages/IssuesDetail";
import NotFound from "./pages/NotFound";
const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<Issues />} />
          <Route path="/:id" element={<IssuesDetail />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
};
export default App;
