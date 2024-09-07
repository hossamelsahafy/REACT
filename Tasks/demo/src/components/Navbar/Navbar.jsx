import "./Navbar.css";
import React from "react";

export function NavBar({ length, setSearch }) {
  return (
    <nav>
      <Logo />
      <SearchInput setSearch={setSearch} />
      <SearchResult length={length} />
    </nav>
  );
}

function Logo() {
  return (
    <div className="logo">
      <img src="/logo1.jpg" />
      <h1>PopCorn</h1>
    </div>
  );
}

function SearchInput({ setSearch }) {
  function handleSearch(e) {
    setSearch(e.target.value);
  }
  return (
    <div className="search-input">
      <input type="text" placeholder="search" onChange={handleSearch} />
    </div>
  );
}

function SearchResult({ length }) {
  return <div className="search-result">{length} result found</div>;
}
