import React from "react";
import ReactDOM  from "react-dom/client";
import BookList from "./BookList";
import App from "./App";
import Data from "./Data";
import Form from "./Form"
import UseEffect from "./UseEffect";
import Fetch from "./Fetch";
import MultipleReturn from './MultipleReturn'
import Memo from './Memo'
import UseMemo from "./UseMemo";
import A from "./ContextApi/A";
import UseReducerTutorial from "./UseReducerTutorial";
import UseReducerEx from "./UseReducerEx";
 import UseRefEx from "./Useref/UseRefEx";
 import UseRefEx2 from "./Useref/UseRefEx2";


const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <BookList/> */}
    {/* <App/> */}
    {/* <Data/> */}
    {/* <Form/> */}
    {/* <UseEffect/> */}
    {/* <Fetch/> */}
    {/* <MultipleReturn/> */}
    {/* <Memo/> */}
    {/* <UseMemo/> */}
    {/* <A/> */}
    {/* <UseReducerTutorial/> */}
    {/* <UseReducerEx/> */}
    {/* <UseRefEx/> */}
    <UseRefEx2/>
  </React.StrictMode>
)
