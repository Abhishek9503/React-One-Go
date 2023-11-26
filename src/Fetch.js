import React, { useEffect } from 'react'
import { useState } from 'react'

const Fetch = () => {
    const[users,setUsers]= useState([])
    useEffect(()=>{
        fetch("https://api.github.com/users")
        .then(response =>response.json())
        .then(data=> setUsers(data))
    },[])
  return (
    <div>
      <h1>User Lists</h1>
      <ul>
     {
        users.map((user)=>{
          return  <li key={users.id}>
          <a href={user.html_url}>{user.login}</a>
                
            </li>
        })
     }
      </ul>
    </div>
  )
}

export default Fetch
