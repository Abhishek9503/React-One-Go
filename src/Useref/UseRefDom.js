import React, { useEffect } from "react";

const UseRefDom = () => {
  const input1 = React.useRef(null);

  // useEffect(()=>{
  //     input1.current.focus();
  // },[])

  function handleFocus() {
    input1.current.style.backgroundColor = "black";
  }

  function handleBlur() {
    input1.current.style.backgroundColor = "";
  }

  return (
    <div>
      <input
        ref={input1}
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default UseRefDom;
