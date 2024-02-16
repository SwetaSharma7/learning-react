// functional Component

import React from "react";

// function Greet(){
//     return <h1>Hello Sweta</h1>
// }

// Arrow Function

const Greet = (props) => {
  return (
    <div>
      <h1>
        Hellooo {props.name} {props.batch}{" "}
      </h1>
      {props.children}
    </div>
  );
};

// const Greet = (() => <h1>Hello sweta</h1>);

export default Greet;
