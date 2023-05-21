import React from 'react'

export default function Card({img, name, id}) {
  return (
    <div>
        <img src={img} alt={name} />
        <h3>{name}</h3>
    </div>
  )
}


