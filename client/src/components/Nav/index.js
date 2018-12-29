import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        React Google Books Search
      </a>
      <a href="/saved">Saved Books</a>
    </nav>
  );
}

export default Nav;
