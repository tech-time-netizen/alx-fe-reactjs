import React, { useContext } from 'react'
import UserContext from './UserContext'

export default function UserProfile() {
  const userData = useContext(UserContext)
  return (
    <div>
          <h2>Name: {userData.name}</h2>
          <p>Age: {userData.age}</p>
          <p>Bio: {userData.bio}</p>
    </div>
  )
}
