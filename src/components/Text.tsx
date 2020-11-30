import React, { useContext } from "react";
import Theme from "../theme";

const Text = (props: Props) => {
  const theme = useContext(Theme);
  return <span style={{ display: "inline-block", color: theme.color }}>{props.children}</span>;
};

export interface Props {
  children: string;
}

export default Text;
