import React, { Component } from "react";
import "./App.css";
// part:2 Hooks
import ClassCounter from "./component/ClassCounter";
import HookCounter from "./component/HookCounter";
import HookCounterTwo from "./component/HookCounterTwo";
import HookCounterOne from "./component/HookCounterOne";
import HookMouse from "./component/HookMouse";
import MouseContainer from "./component/MouseContainer";
import DataFeatching from "./component/DataFeatching";



function App(){
  return(
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterOne /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      <DataFeatching />
    </div>
  )
}








// part:1
// import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import Hello from "./components/Hello";
// import Msg from "./components/Msg";
// import Counter from "./components/counter";
// import FunctionClick from "./components/FunctionClick";
// import ClassClick from "./components/ClassClick";
// import UserGreting from "./components/UserGreting";
// import NameList from "./components/NameList";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">

        {/* part:1 */}
        {/* <Greet name="Pavani" batch="123">
          <p>This is Children props</p>
        </Greet>
        <Greet name="Sweta" batch="123">
          <button>click me</button>
        </Greet>
        <Greet name="xyz" batch="234" /> */}
        {/* <Welcome /> */}
        {/* <Hello /> */}
        {/* <Msg /> */}
        {/* <Counter /> */}
        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}
        {/* <UserGreting /> */}
//         {/* <NameList /> */}
//       </div>
//     );
//   }
// }

export default App;
