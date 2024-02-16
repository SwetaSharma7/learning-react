import React, { useState, useEffect } from "react";
import HookMouse from "./HookMouse";

function MouseContainer() {
    const [display, setDisplay] = useState(true)
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = e => {
    console.log('mouse event'); 
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener('mousemove', logMousePosition)

    return () => {
        console.log("component unmounting code")
        window.removeEventListener('mousemove', logMousePosition)
    }
  }, []);
  return (
    <div>
      {display && <div> Hook X - {x} Y - {y}</div>}
      <button onClick={() => setDisplay(!display)}>
        Toggle Display
      </button>
      {display && <HookMouse />}
    </div>
  );
}

export default MouseContainer;
