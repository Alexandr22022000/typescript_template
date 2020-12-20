import React from "react";
import logo from "./logo.svg";
import List from "./components/List";
import ThemeToggle from "./components/ThemeToggle";
import DynamicList from "./components/DynamicList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <List />
      <ThemeToggle />
      <DynamicList />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
