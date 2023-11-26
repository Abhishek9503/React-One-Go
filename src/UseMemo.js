import React, { useState } from "react";
import NewComp from "./NewComp";
import { useMemo } from "react";
const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  function handleInput(e) {
    setInput(e.target.value);
  }

  const result =useMemo(function slowFunction() {
    let sum = 0;
    for (let i = 0; i < 100; i++) {
      sum += i;
    }
    console.log("Hello I am abhishek ");
    return sum;
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <br />
      <hr />
      <input type="text" onChange={handleInput} value={input} />

      <hr />
    {result}
    </div>
  );
};

export default UseMemo;
