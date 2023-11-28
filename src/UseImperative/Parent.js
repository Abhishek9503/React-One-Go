import React, { useRef } from "react";
import Child from "./Child";
const Parent = () => {
  const childRef = useRef(null);

  function handleOpenModel(val) {
    childRef.current.openModal(val);
  }
  return (
    <div>
      <p>This is Parent </p>
      <Child ref={childRef} />
      <button onClick={() => handleOpenModel(true)}>Open Modal</button>
    </div>
  );
};

export default Parent;
