import React from 'react'
import {Route} from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'
import Puppies from './Puppies'
import Pup from './Pup'
import Contact from './Contact'

function App () {
  return (
    <>
      <div>App</div>
      <Route exact path='/' component={Home} />
      <Route path='/' component={Nav} />
      <Route path='/puppies' component={Puppies} />
      <Route path='/puppy/:id' component={Pup} />
      <Route path='/contact' component={Contact} />
    </>
  )
}

export default App
