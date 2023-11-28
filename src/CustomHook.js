import React, { useEffect } from "react";
import { useState } from "react";
import useFetch from "./useFetch";
const CustomHook = () => {
  const [users] = useFetch();
    console.log(users)
  return (
    <div>
      <h1>User Lists</h1>
      <ul>
        {users.map((user) => {
          return (
            <li key={users.id}>
              <a href={user.html_url}>{user.login}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CustomHook;
