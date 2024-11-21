import IndexPage from "./pages/indexPage";
import LoginPage from "./pages/loginPage";
import "./App.css";

import { Route, Routes } from "react-router";
import Layout from "./layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path={"/login"} element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
