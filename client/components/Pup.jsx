import React from 'react'

import puppies from '../../data/puppies'

export default function Pup (props) {
  const id = Number(props.match.params.id)
  const pup = puppies.find(pup => pup.id === id)

  return (
    <div>
      <p>{pup.name}</p>
      <p>{pup.owner}</p>
      <p>{pup.breed}</p>
      <img className='img-circle' src={pup.image}/>
    </div>
  )
}
