import React from 'react'
import Album from './Album'

export default function Albums(props) {
    return (
        <div>
{props.albums.map(album =>  <Album mappedData={album} />)}
        </div>
    )
}
