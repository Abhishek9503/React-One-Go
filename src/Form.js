// import React, { useState } from 'react'

// const Form = () => {

//   const [name,setName] = useState("");
//   const [email,setEmail] = useState("");
//   const [password,setPassword] = useState("");

//   const handleName = (e) =>{
//     setName(e.target.value)
//   }
//   const handleEmail = (e) =>{
//     setEmail(e.target.value)
// }
// const handlePassword = (e) =>{
//   setPassword(e.target.value)
// }

// const handleSubmit = (e)=>{
//   e.preventDefault();
// }

//   return (
//     <form  onSubmit={handleSubmit}>
//       <label >
//       Name:
//         <input type="text" value={name} onChange={handleName} />
//       </label>
   
//       <label >
//       Email:
//         <input type="email" value={email} onChange={handleEmail} />
//       </label>
      
//       <label >
//       Password:
//         <input type="password" value={password}  onChange={handlePassword} />
//       </label>
//       <button type='submit'>Submit</button>
//     </form>
//   )
// }

// export default Form



import React, { useState } from 'react'

const Form = () => {

  const [ formData, setFormData] = useState({
    name:'',
    email:'',
    password:''
  })

  const handleInput = (e)=>{
      // console.log(e.target.name);
      // console.log(e.target.value)
      const {name,value}= e.target;

      setFormData({...formData,
        [name]:value
      })
  }

  return (
    <form>
             <label >
       Name:
         <input type="text" name='name' value={formData.name} onChange={handleInput} />
       </label>
   
      <label >
       Email:
        <input type="email" name='email' value={formData.email} onChange={handleInput} />
      </label>
      
      <label >
       Password:
        <input type="password" name='password' value={formData.password}  onChange={handleInput} />
     </label>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form
