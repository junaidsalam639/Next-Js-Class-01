import React from 'react'

const id = ({params}) => {
  return (
    <div>
      <h1>Home{params.id}</h1>
    </div>
  )
}

export default id
