import React from 'react'
import data from './data/band-page.json'

const BandPage = props => {
  const band = data.categories.filter(item => {
    return item.category === props.match.params.category
  })[0]

  console.log(band)
  return (
    <div className={props.match.params.category}>
      {/* <h1>Hello, you are on the {band.category} page!!!</h1> */}
      <ul>
        {band.albums.map(album => {
          return (
            <li>
              <h1>{album.name}</h1>
              <h2>{album.title}</h2>
              <img src={album.image} alt="" />
              <h3>{album.releaseDate}</h3>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default BandPage
