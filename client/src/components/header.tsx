import React from "react";

import "./Header.css";

const Header: React.FC = () => {
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
        <a href="/support">
          <i className="icon-support">🙋‍♂️</i>
        </a>

        <a href="/discord">
          <i className="icon-discord">🎮</i>
        </a>

        <a href="/settings">
          <i className="icon-settings">⚙️</i>
        </a>
      </div>
    </header>
  );
};

export default Header;
