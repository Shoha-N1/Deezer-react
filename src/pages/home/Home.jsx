import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

export default function Home() {
  const {data} = useFetch("https://deezer.humosoft.uz/artist")

  return (
    <div>
      <div className="big-box">
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
  );
}
