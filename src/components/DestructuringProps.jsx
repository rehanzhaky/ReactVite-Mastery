import React from 'react'

// Destructuring props, bukan punya react basicall ini teknik di Javascript
const DestructuringProps = ({age, job}) => {
  return (
    <div>
      <h1>im {age} years old, and im a {job}</h1>
    </div>
  )
}

export default DestructuringProps
