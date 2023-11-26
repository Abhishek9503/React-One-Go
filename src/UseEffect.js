import React, { useState } from 'react'
import { useEffect } from 'react'

const UseEffect = () => {


    const [clicked, setClicked]= useState();
    const [count, setCount]= useState(0);

   useEffect(() => {
        console.log("We are in Use State");

        return  (
            ()=>{
                console.log("we are insided return")
            }
        )
    },[clicked,count])

 

  return (
    <div>
    <button onClick={()=> setClicked('Subscribe')}>Subscibe</button>
    <br />
    <hr />
    <button onClick={()=> setClicked('To')}>To</button>
    <br />
    <hr />
    <button onClick={()=> setClicked('Hardik Tec Vlogs')}>Hardik Tec Vlogs</button>
      <h1>{clicked}</h1>

      <br />
      <hr />
    <h1>{count}</h1>
      <button onClick={() => setCount(count+1)}>Increament</button>

      

    </div>
  )
}

export default UseEffect
