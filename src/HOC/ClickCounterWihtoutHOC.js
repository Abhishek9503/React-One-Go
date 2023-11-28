import React, { useState } from 'react'

const ClickCounterWihtoutHOC = () => {

    const[count, setCount]= useState(0);


    const increamentCount =()=>{
        setCount(count+1);
    }

  return (
    <div>
        <button onClick={increamentCount}>
            Clicked {count}
        </button>
    </div>
  )
}
export default ClickCounterWihtoutHOC;