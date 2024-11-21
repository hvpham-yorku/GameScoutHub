import IndexPage from "./pages/indexPage";
import LoginPage from "./pages/loginPage";
import "./App.css";

import { Route, Routes } from "react-router";
import Layout from "./layout";
import SignupPage from "./pages/signupPage";
import { UserContextProvider } from "./contexts/userContext";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/signup"} element={<SignupPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
