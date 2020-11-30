import React, { useState, useMemo } from "react";
//@ts-ignore
import md5 from "md5";
import Text from "./Text";
import Button from "./Button";
import Input from "./Input";

const Item = (props: Props) => {
  const [editingValue, setEditingValue] = useState<string | null>(null);

  let hash = useMemo(() => {
    return md5(props.children + Date.now());
  }, [props.children]);

  if (editingValue === null)
    return (
      <div>
        <Text>{props.children}</Text>
        <Button onClick={() => setEditingValue(props.children)}>Edit</Button>
        <Text>{hash}</Text>
      </div>
    );

  return (
    <div>
      <Input value={editingValue} onChange={setEditingValue} />
      <Button
        onClick={() => {
          props.onUpdate(editingValue);
          setEditingValue(null);
        }}
      >
        Save
      </Button>
      <Button onClick={() => setEditingValue(null)}>Cancel</Button>
      <Button onClick={props.onDelete}>Delete</Button>
    </div>
  );
};

export interface Props {
  children: string;
  onUpdate: (value: string) => void;
  onDelete: () => void;
}

export default Item;
