import React, { startTransition, useState, useTransition } from "react";

const UseTransition = () => {
  const [name, setName] = useState("");
  const [lists, setLists] = useState([]);
  const [ isPending, setIsPending]= useTransition();

  const LIST_SIZE = 200;

  const handleChange = (e) => {
    const { value } = e.target;
    setName(value);

    startTransition(()=>{
        const dataList = [];

        for (let i = 0; i < LIST_SIZE; i++) {
          dataList.push(value);
        }
        setLists(dataList);
  })
    // const dataList = [];

    // for (let i = 0; i < LIST_SIZE; i++) {
    //   dataList.push(value);
    // }
    // setLists(dataList);
  };
  return (
    <div>
      <input type="text" value={name} onChange={handleChange} key="input" />

      {lists.map((list, index) => {
        return <div key={index}>{lists}</div>;
      })}
    </div>
  );
};

export default UseTransition;
