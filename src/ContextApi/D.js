import React from 'react'
import {GreetContext} from './A'

import { useContext } from 'react';


const D = () => {

    const useCon = useContext(GreetContext);


  return (
   <GreetContext.Consumer>{(val)=>{
return <>
<h1>Greet:{useCon.greet} </h1>
<h2> {useCon.greet2}</h2>
</>
   
   }}
      
    </GreetContext.Consumer>   
  )
}

export default D
