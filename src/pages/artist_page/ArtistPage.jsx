import React from 'react'
import "./ArtistPage.scss"
import "./../home/Home.scss"
import useFetch from '../../hooks/useFetch'

export default function ArtistPage() {
  const {data} = useFetch("https://deezer.humosoft.uz/artist")
  
  return (
    <div className='box-inner'>
      <h2>Artist</h2>
      <ul>
          {data.map(artist => (
            <li key={artist.id}>
              <Link to={`/${artist.id}`}>{artist.name}</Link>
              <img src={artist.picture_small} alt={artist.name} />
            </li>
          ))}
        </ul>
    </div>
  )
}
