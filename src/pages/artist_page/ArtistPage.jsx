import React from 'react'
import "./ArtistPage.scss"
import "./../home/Home.scss"
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'

export default function ArtistPage() {
  const { artistId } = useParams()
  const { data } = useFetch(`https://deezer.humosoft.uz/artist/${artistId}`)
  
  return (
    <div className='box-inner'>
      <h2>Artist</h2>
      <img src={data.picture_small} alt={data.name} />
      <h1>{data?.name}</h1>
      <div>{data?.tracklist}</div>
    </div>
  )
}
