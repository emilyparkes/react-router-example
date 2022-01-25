import React from 'react'
import { Link } from 'react-router-dom'

import puppies from '../../data/puppies'

export default function Puppies () {
  return (
    <div className='puppy-list'>
      <h3>All Puppies</h3>
      <ul>
        {puppies.map(pup => {
          return <li key={pup.id}>
            <Link to={`/puppy/${pup.id}`}>{pup.name}</Link>
          </li>
        }
        )}
      </ul>
    </div>
  )
}
