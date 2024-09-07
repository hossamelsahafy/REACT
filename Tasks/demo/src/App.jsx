import "./App.css";
import { NavBar } from "./components/Navbar/Navbar";
import { MovieList } from "./components/MovieList/MovieList";
import { useState } from "react";

function App() {
  const [length, setLength] = useState(0);
  const [search, setSearch] = useState("");
  return (
    <>
      <NavBar length={length} setSearch={setSearch} />
      <div className="main">
        <MovieList setLength={setLength} search={search} />
      </div>
    </>
  );
}

export default App;
