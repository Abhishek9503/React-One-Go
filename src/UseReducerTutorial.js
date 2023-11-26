import React, { useReducer } from 'react'




const reducer=(state,action)=>{
console.log(state,action);
if(action.type === 'incr'){
    return {count: state.count +1}
}
else   if(action.type === 'decr'){
    return {count: state.count -1}
}

else{
    throw new Error("Unsupported action type")
}
}

const UseReducerTutorial = () => {

const [state,dispatch]=  useReducer(reducer,{count:0});

//reduced ek function
//it is pure functions
//it contains state and action
  
const handleClickInc= ()=>{
    dispatch({type:"incr"});
}

const handleClickDec= ()=>{
    dispatch({type:"decr"});
   
}

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={handleClickInc}>+</button>
      <button onClick={handleClickDec}>-</button>
    </div>
  )
}

export default UseReducerTutorial
