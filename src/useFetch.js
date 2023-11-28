import React from 'react'
import { useEffect,useState } from 'react'

const useFetch = () => {
    const[users,setUsers]= useState([]);
    useEffect(()=>{
        fetch("https://api.github.com/users")
        .then(response =>response.json())
        .then(data=> setUsers(data))
    },[])

  return [users];
}

export default useFetch
