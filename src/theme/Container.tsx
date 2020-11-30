import React, { useState } from "react";
import Theme from "./index";

const Container = (props: Props) => {
  const [color, setColor] = useState("black");
  return <Theme.Provider value={{ color, setColor }}>{props.children}</Theme.Provider>;
};

export interface Props {
  children: any;
}

export default Container;
