import React from 'react'
import "./Header.scss"
import NavLink from '../nav_link/NavLink'

export default function Header() {
  return (
    <div>
          <header>
            <h1>
                <a href="/">
                    <img src="./img/Logo" alt="logo" />
                </a>
            </h1>

            <nav>
              <ul>
              <li>
                  <NavLink to={`/`}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={`/artist_page`}>Artists</NavLink>
                </li>
                <li>
                  <NavLink to={`/playlist`}>Playlists</NavLink>
                </li>
                <li>
                  <NavLink to={`/podcast`}>Podcasts</NavLink>
                </li>
                <li>
                  <NavLink to={`/track`}>Tracks</NavLink>
                </li>
              </ul>
            </nav>
        </header>
    </div>
  )
}
