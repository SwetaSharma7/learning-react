import React from "react";
import PersonList from "./PersonList";

function NameList() {
  // const names = ['sweta', 'pavani', 'Abhinav']

  const persons = [
    {
      id: 1,
      name: "sweta",
      age: 23,
      skill: "React",
    },
    {
      id: 1,
      name: "pavani",
      age: 23,
      skill: "React",
    },
    {
      id: 1,
      name: "abhinav",
      age: 23,
      skill: "React",
    },
    {
      id: 1,
      name: "ashu",
      age: 23,
      skill: "React",
    },
  ];
  const personList = persons.map(person => (<person key={person.id} person = {person} />));
  return (
    <div>
      {/* <h2>{names[0]}</h2>
        <h2>{names[1]}</h2>
        <h2>{names[2]}</h2> */}
      {/* {
            names.map(name => <h2>{name}</h2>)
        } */}

      <div>{personList}</div>
    </div>
  );
}

export default NameList;
