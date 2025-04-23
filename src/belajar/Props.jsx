import React from "react";

// Apa itu Props?
const Props = (props) => {
  return (
    <div>
      <h1>{props.message} {props.name}</h1>
    </div>
  );
};

export default Props;
