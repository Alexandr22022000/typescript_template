import { createContext } from "react";

const Theme = createContext({
  color: "black",
  setColor: (color: string) => {},
});

export default Theme;
