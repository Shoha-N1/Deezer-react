import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import ArtistPage from "../artist_page/ArtistPage";

export default function Home() {
  const { data } = useFetch("https://deezer.humosoft.uz/chart");

  return (
    <div>
      <div className="big-box">
        <h2>Artist</h2>
        <ul>
          {data.map(artist => {
            <li key={artist.id}>
              <h2>{artist.name}</h2>
              <img src={artist.picture_small} alt={artist.name} />
              <Link to={`/${artist.id}`}>Listen artist</Link>
            </li>;
          })}
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
