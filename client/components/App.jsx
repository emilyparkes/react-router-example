import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'
import Puppies from './Puppies'
import Pup from './Pup'
import Contact from './Contact'

function App () {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/puppies' element={<Puppies />} />
        <Route path='/puppy/:id' element={<Pup />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
