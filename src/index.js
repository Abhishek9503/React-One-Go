import React from "react";
import ReactDOM from "react-dom/client";
import BookList from "./BookList";
import App from "./App";
import Data from "./Data";
import Form from "./Form";
import UseEffect from "./UseEffect";
import Fetch from "./Fetch";
import MultipleReturn from "./MultipleReturn";
import Memo from "./Memo";
import UseMemo from "./UseMemo";
import A from "./ContextApi/A";
import UseReducerTutorial from "./UseReducerTutorial";
import UseReducerEx from "./UseReducerEx";
import UseRefEx from "./Useref/UseRefEx";
import UseRefEx2 from "./Useref/UseRefEx2";
import UseRefDom from "./Useref/UseRefDom";
import CustomHook from "./CustomHook";
import CustomHook2 from "./CustomHook2";
import UseLayoutExample from "./UseLayoutExample";
import UseTransition from "./UseTransition";
import ClickCounterWihtoutHOC from "./HOC/ClickCounterWihtoutHOC";
import HoverCounterWihtouHOC from "./HOC/HoverCounterWihtouHOC";
import ClickCounterwithHOC from "./HOC/ClickCounterwithHOC";
import HoverCounterWithHOC from "./HOC/HoverCounterWithHOC";
import Child from "./UseImperative/Child";
import Parent from "./UseImperative/Parent";
import RouterExample from "./Router/RouterExample";
import Navbar from "./Router/Navbar/Navbar";
import FormVal from "./FormVal";
import { BrowserRouter,Routes,Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

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
    {/* <UseRefEx2/> */}
    {/* <UseRefDom/> */}
    {/* <CustomHook/> */}
    {/* <CustomHook2/> */}
    {/* <UseLayoutExample/> */}
    {/* <UseTransition/> */}
    {/* <ClickCounterWihtoutHOC/> */}
    {/* <HoverCounterWihtouHOC/> */}
    {/* <ClickCounterwithHOC/> */}
    {/* <HoverCounterWithHOC/> */}
    {/* <Parent/> */}
    {/* <Child/> */}
    {/* <RouterExample/> */}
{/* 
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<div><img src="https://freesvg.org/storage/img/thumb/dynnamitt_home.png" alt="" /></div>}></Route>
        <Route path="/about" element={<div><img src="data:image/jpeg;base64,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" alt="" /></div>}></Route>
       
       
        <Route path="/contact" element={<div><img src="https://cdn.pixabay.com/photo/2016/12/15/12/24/contact-us-1908762_640.png" alt="" /></div>}></Route>


        <Route path="/login" element={<div><img src="https://cdn.dribbble.com/users/1889528/screenshots/7239609/0aba6579301149.5cbf290c5a8dd.jpg" alt="" /></div>}></Route>

        <Route path="*" element={<div><img src="https://www.elegantthemes.com/blog/wp-content/uploads/2020/08/000-http-error-codes.png" alt="" /></div>}></Route>
      </Routes>
    </BrowserRouter> */}
    <FormVal/>
  </React.StrictMode>
);
