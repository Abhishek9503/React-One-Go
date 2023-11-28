import React, { useEffect, useLayoutEffect } from "react";

//is it similar to useEffect which is async but it synchrnous ,
//this is use to render the element at first go without any delay or side work



const UseLayoutExample = () => {

    useEffect(() => {
        console.log("Use effect part");
      }, []);
      
      useEffect(() => {
        console.log("Use effect part");
      }, []);
      
      useLayoutEffect(() => {
        console.log("This is useLayout effect");
      }, []);

      useEffect(() => {
        console.log("Use effect part");
      }, []);
      
      useEffect(() => {
        console.log("Use effect part");
      }, []);
      
      //Use layout phle chlega phir useeffect chlega

  return <div></div>;
};

export default UseLayoutExample;
