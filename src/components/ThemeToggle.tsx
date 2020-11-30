import React, { useContext } from "react";
import Theme from "../theme";

const ThemeToggle = () => {
  const theme = useContext(Theme);
  return (
    <div>
      <button onClick={() => theme.setColor("black")}>BLACK</button>
      <button onClick={() => theme.setColor("red")} style={{ color: "red" }}>
        RED
      </button>
    </div>
  );
};

export default ThemeToggle;
