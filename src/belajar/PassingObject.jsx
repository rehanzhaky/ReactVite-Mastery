import React from "react";

const PassingObject = ({ favThing }) => {
  return (
    <div>
      <h1>
        I really love to read the {favThing.title}, the best book in the world
        from
        {favThing.author}, and i remember one quote from that book is
        {favThing.famousQuotes}
      </h1>
    </div>
  );
};

export default PassingObject;
