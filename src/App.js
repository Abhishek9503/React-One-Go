import React from "react"
import { useState } from "react"
const App = () => {

    const[count,setCount]= useState(0);
    // console.log(count);


    const handleClickAdd = ()=>{
        setCount(count+1);
    }

    const handleClickSub = ()=>{
        setCount(count-1);
    }


  return (
    <div>
        <h1>{count}</h1>      
        <button onClick={handleClickAdd}>+</button>
        <button onClick={handleClickSub}>-</button>
    </div>
  )
}

export default App
