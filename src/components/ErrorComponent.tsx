import React, { useState } from "react";

const ErrorComponent = () => {
  const [isError, setIsError] = useState(false);
  if (isError) throw new Error("MyError!");

  return <button onClick={() => setIsError(true)}>MAKE ERROR</button>;
};

export default ErrorComponent;
