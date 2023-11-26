import React, { useState } from "react";
import NewComp from "./NewComp";

const Memo = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");


  function handleInput(e){
    setInput(e.target.value)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <br />
      <input type="text" onChange={handleInput} value={input} />

      <hr />
      <NewComp count={count}   />
    </div>
  );
};

export default Memo;
