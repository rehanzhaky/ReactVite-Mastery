import React from "react";

const ImmutabilityOfProps = (props) => {
    // uncomment untuk melihat error
    // props.learn = "Javascript"
  return (
    <div>
      <h1>
        im learn {props.learn} with youtube {props.with}
      </h1>
    </div>
  );
};

export default ImmutabilityOfProps;
