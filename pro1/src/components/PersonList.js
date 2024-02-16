import React from "react";
import NameList from "./NameList";

function PersonList(person) {
  return (
    <div>
      <h2>
        I am {person.name}. I am {person.age} I am good at{person.skill}
      </h2>
    </div>
  );
}

export default PersonList;
