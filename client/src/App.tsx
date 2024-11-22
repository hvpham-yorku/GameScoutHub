import IndexPage from "./pages/indexPage";
import LoginPage from "./pages/loginPage";
import "./App.css";

import { Route, Routes } from "react-router";
import Layout from "./layout";
import SignupPage from "./pages/signupPage";

import NewsListPage from "./pages/newsListPage";
import AboutUs from "./pages/AboutUs";
import ListOfNews from "./components/ListOfNews";
import { UserContextProvider } from "./contexts/userContext";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/signup"} element={<SignupPage />} />
        <Route path ={"/news"} element={<ListOfNews />}/>
        <Route path ={"/testnews"} element = {<ListOfNews/>}/>
        <Route path ={"/aboutus"} element={<AboutUs />}/>
      </Route>



  );
}

export default App;
