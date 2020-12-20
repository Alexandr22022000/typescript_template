import React from "react";
import useErrorBoundary from "use-error-boundary";
import Try from "./Try";
import ErrorComponent from "./ErrorComponent";
import OnError from "./OnError";

const DynamicList = () => {
  const { ErrorBoundary, didCatch, error } = useErrorBoundary();

  return (
    <>
      <Try onError={<OnError />}>
        <ErrorComponent />
      </Try>
      <ErrorBoundary renderError={OnError}>
        <ErrorComponent />
      </ErrorBoundary>
    </>
  );
};

export default DynamicList;
