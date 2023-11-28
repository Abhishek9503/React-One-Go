

import React, { useState } from 'react'

const HoverCounterWihtouHOC = () => {

    const[count, setCount]= useState(0);


    const increamentCount =()=>{
        setCount(count+1);
    }

  return (
    <div>
        <button onMouseOver={increamentCount}>
            Clicked {count}
        </button>
    </div>
  )
}
export default HoverCounterWihtouHOC;