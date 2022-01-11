import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav () {
  return (
    <div>
      <ul>
        <Link to='/'><li>home</li></Link>
        <Link to='/puppies'><li>puppies</li></Link>
        <Link to='/contact'><li>contact</li></Link>
      </ul>
    </div>
  )
}
