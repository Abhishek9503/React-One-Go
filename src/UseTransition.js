import React, { startTransition, useState, useTransition } from "react";

const UseTransition = () => {
  const [name, setName] = useState("");
  const [lists, setLists] = useState([]);
  const [ isPending, startTransition]= useTransition();
  useTransition();

  const LIST_SIZE = 1000;

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
      {
        isPending ? (<div>Loading...</div>):lists.map((list, index) => {
        return <div key={index}>{lists}</div>;
      })
      }
     
    </div>
  );
};

export default UseTransition;
