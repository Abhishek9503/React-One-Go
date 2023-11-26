import React from 'react'
import B from './B'
import { createContext } from 'react';

const GreetContext= createContext();

const A = () => {
    const greet="Hello";
    const greet2="Hiii";
  return (
    <div>
    <GreetContext.Provider value={{greet, greet2}}>
        <B/>
    </GreetContext.Provider>      
    </div>
  )
}

export default A;
export {GreetContext};
