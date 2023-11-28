import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'

const RouterExample = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>Home</div>}></Route>
        <Route path='/about' element={<div>About</div>}></Route>
        <Route path='/contact' element={<div>Contact</div>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default RouterExample
