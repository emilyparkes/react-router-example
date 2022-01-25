import React from 'react'
import { useParams } from 'react-router-dom'

import puppies from '../../data/puppies'

export default function Pup (props) {
  const { id } = useParams()
  const pup = puppies.find(pup => pup.id === Number(id))

  return (
    <div>
      <p>{pup.name}</p>
      <p>{pup.owner}</p>
      <p>{pup.breed}</p>
      <img className='img-circle' src={pup.image}/>
    </div>
  )
}
