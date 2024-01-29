import { useState } from 'react'

import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Nav from './Component/Navbar'
import AllRoute from './AllRoutes'

function App() {
 

  return (
    <>
    <BrowserRouter>
      <Nav/>
      <AllRoute/>
    </BrowserRouter>
     
    </>
  )
}

export default App