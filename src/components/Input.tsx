import React, { useContext } from "react";
import Theme from "../theme";

const Input = (props: Props) => {
  const theme = useContext(Theme);
  return <input style={{ color: theme.color }} value={props.value} onChange={(e) => props.onChange(e.target.value)} />;
};

export interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default Input;
