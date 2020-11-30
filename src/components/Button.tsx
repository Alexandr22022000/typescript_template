import React, { useContext } from "react";
import Theme from "../theme";

const Button = (props: Props) => {
  const theme = useContext(Theme);
  return (
    <button style={{ color: theme.color }} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export interface Props {
  children: any;
  onClick: () => void;
}

export default Button;
