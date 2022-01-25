import React from 'react'
import puppies from '../../data/puppies'

function App () {
  return (
    <>
      <div className='title'>
        <h2>Welcome to my Doggo Directory</h2>
      </div>

      <div className='puppy-list'>
        <h3>All Puppies</h3>
        <ul>
          {puppies.map(pup => {
            return <li key={pup.id}>
              {pup.name}
            </li>
          }
          )}
        </ul>
      </div>

      <div>
        <h3>Contact to see puppers IRL:</h3>
        <ul>
          <li>275 Cuba Street, Poneke</li>
          <li>hello@devacademy.co.nz</li>
          <li>Via DM on Slack</li>
          <li>Bren, Freya, Tom and Casey</li>
        </ul>
      </div>
    </>
  )
}

export default App
