import React from 'react'
import map from './coords.json'
import ImageMapper from 'react-image-mapper';
import world from './map.jpg'

export default function Map({ handleSelectedCountry }) {
    return (
        <ImageMapper
            onClick={(e) => handleSelectedCountry(e.name)}
            src={world}
            map={map}
            width={900}
            imgWidth={1000} />
    )
}
