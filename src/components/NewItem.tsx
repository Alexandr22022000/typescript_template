import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const NewItem = (props: Props) => {
  const [value, setValue] = useState<string | null>(null);

  if (value === null)
    return (
      <div>
        <Button onClick={() => setValue("")}>Add</Button>
      </div>
    );

  return (
    <div>
      <Input value={value} onChange={setValue} />
      <Button
        onClick={() => {
          props.onAdd(value);
          setValue(null);
        }}
      >
        Add
      </Button>
      <Button onClick={() => setValue(null)}>Cancel</Button>
    </div>
  );
};

export interface Props {
  onAdd: (value: string) => void;
}

export default NewItem;
