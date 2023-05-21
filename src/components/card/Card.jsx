import React from 'react'

export default function Card({img, name, id}) {
  return (
    <div>
        <img src={img} alt={name} />
        <h3>{name}</h3>
    </div>
  )

  async function fetchArtists() {
    const res = await fetch("https://api.deezer.com/chart");
    const data = await res.json();
  }

}


