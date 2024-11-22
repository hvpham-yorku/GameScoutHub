import React, { useContext, useEffect } from "react";

import "./Header.css";
import { UserContext } from "../contexts/userContext";
import axios from "axios";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const userContext = useContext(UserContext);

  useEffect(() => {
    async function getProfile() {
      const userDoc = await fetch(`${import.meta.env.VITE_API_URL}/profile`, {
        credentials: "include",
      }).then((response) => response.json());
      userContext?.setUserInfo(userDoc);
    }
    getProfile();
  });

  function logout() {
    axios.post(
      `${import.meta.env.VITE_API_URL}/auth/logout`,
      {},
      { withCredentials: true }
    );
    userContext?.setUserInfo(null);
    localStorage.removeItem("loggedin");
  }

  return (
    <header className="header">
      <div className="header-logo">GameScoutHub</div>
      <nav className="header-nav">
        <a href="/how-to-use">How to Use</a>
        <a href="/news">Newsstand</a>
        <a href="/aboutus">About Us</a>
        <a href="/profile">My profile</a>
      </nav>

      <div className="header-icons">
        {userContext?.userInfo && (
          <>
            <Link to="/profile" className="">
              Go to profile
            </Link>
            <Link to="/" onClick={logout} className="">
              Sign out
            </Link>
          </>
        )}
        {!userContext?.userInfo && (
          <>
            <Link to="/login" className="">
              Login
            </Link>
            <Link to="/signup" className="">
              Register
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default React.memo(Header);
