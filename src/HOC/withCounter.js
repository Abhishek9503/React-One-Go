import React from 'react'
import { useState } from 'react';
const withCounter = (OriginalComponent) => {

const EnhancedComponent = ()=>{
    const[count, setCount]= useState(0);


    const increamentCount =()=>{
        setCount(count+1);
    }

    return (
        <OriginalComponent increamentCount={increamentCount} count={count}/>
    )

}

  return EnhancedComponent;
}

export default withCounter
