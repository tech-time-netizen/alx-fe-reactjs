import React from 'react'

export default function UserProfile({name, age, bio}) {
  return (
    <div>
          <h2>Name: {name}</h2>
          <p>Age: {age}</p>
          <p>Bio: { bio}</p>
    </div>
  )
}
