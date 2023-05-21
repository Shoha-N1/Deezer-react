import React from 'react'
import "./Home.scss"
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <ul>
            {artists.data.map(artist => (
                <li key={artist.id}>
                   <Link to={`/artist/data/${artist.id}`}>{artist.name}</Link>
                   <img src={artist.picture_small} alt={artist.name} />
                </li>
            ))}
        </ul>

        <div className="big-box">
        <h2>Playlists</h2>
        </div>

        <div className="big-box">
        <h2>Podcast</h2>
        </div>

        <div className="big-box">
        <h2>Tracks</h2>
        </div>

    </div>
  )
}
