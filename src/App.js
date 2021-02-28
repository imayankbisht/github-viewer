import "./styles.css";
import Axios from "axios";
import React, { useState } from "react";
import Show from "./components/Show";
import SerachBar from "./components/SerachBar";
import HandleUI from "./components/handleUI";

export default function App() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Axios.get(`https://api.github.com/users/${search}/repos`).then(
        (response) => {
          setResult(response.data);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const inputChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="App">
      <SerachBar
        search={search}
        inputChange={inputChange}
        handleSubmit={handleSubmit}
      />
      {search === "" ? <HandleUI /> : <Show result={result} />}
    </div>
  );
}
