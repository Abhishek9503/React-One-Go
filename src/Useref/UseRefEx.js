import React, { useEffect } from 'react'

import { useRef, useState } from 'react'

const UseRefEx = () => {

  const[userInput,setUserInput]=useState("");
  const renders= useRef(0);

  useEffect(()=>{
    console.log("websit loader now")
    renders.current= renders.current+1;
  })

  return (
    <div>
    <input value={userInput} onChange={(e)=>setUserInput(e.target.value)} type="text" />
    <p>The componenet renderd {renders.current} times</p>
    </div>
  )
}

export default UseRefEx
