import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ContextFunction from "./pages/Context";

function App() {
  return (
    <BrowserRouter>
      <ContextFunction>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Layout>
      </ContextFunction>
    </BrowserRouter>
  );
}

export default App;
