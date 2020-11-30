import React, { useEffect, useReducer } from "react";
import Item from "./Item";
import NewItem from "./NewItem";

interface Action {
  type: string;
  payload: any;
}

const reducer = (state: string[], action: Action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload.text];
    case "delete":
      state.splice(action.payload.index, 1);
      return [...state];
    case "update":
      state[action.payload.index] = action.payload.text;
      return [...state];
    default:
      return state;
  }
};

const List = () => {
  const [list, setList] = useReducer(reducer, []);

  useEffect(() => {
    document.title = list.length + " items";
  }, [list]);

  return (
    <div>
      {list.map((item, index) => (
        <Item
          key={"main_list_" + index}
          onUpdate={(text) => setList({ type: "update", payload: { text, index } })}
          onDelete={() => setList({ type: "delete", payload: { index } })}
        >
          {item}
        </Item>
      ))}
      <NewItem onAdd={(text) => setList({ type: "add", payload: { text } })} />
    </div>
  );
};

export default List;
