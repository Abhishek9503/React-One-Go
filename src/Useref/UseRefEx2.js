import React, { useEffect, useState, useRef } from "react";

const UseRefEx2 = () => {
  // const[count, setCount]=useState(0);
  const count = useRef(0);

  useEffect(() => {
    console.log("The Componenet have been rendered");
  });

  const handle = () => {
    count.current = count.current + 1;

    console.log(`Clicker ${count.current} times`);
  };
  return (
    <div>
      <button onClick={handle}>Click Me</button>
    </div>
  );
};

export default UseRefEx2;
