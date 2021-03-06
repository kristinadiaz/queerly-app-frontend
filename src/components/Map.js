import React, { useState } from 'react' 
import BusinessCard from './BusinessCard'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'

const mapStyles = {
    height: '93vh',
    width: '100%',
    right: '-2px'
}

const defaultCenter = {
    lat: 39.7392,
    lng: -104.9903
}


export default function Map({ businesses, addFavorite, added }) {
    const [select, setSelect] = useState({})
    // console.log(select)

    const handleSelect = item => {
        setSelect(item)
    }

    const locations = businesses.map(business => {
        const position = {
            lat: business.lat,
            lng: business.lng
        }
        business.position = position
        return(
            <Marker 
            key={business.id}
            position={position}
            onClick={() => handleSelect(business)}
            />
        )
    })

    return(
        <LoadScript googleMapsApiKey='AIzaSyBgjp2nlPWlQ8aDZwcBF0O9aIvYJkO_6uM'>
            <GoogleMap mapContainerStyle={mapStyles} zoom={12} center={defaultCenter}>
                {locations}
                {select.id && (
                    <InfoWindow
                    position={select.position}
                    clickable={true}
                    onCloseClick={() => setSelect({})}
                    >
                        <BusinessCard key={select.id} bus={select} handleClick={addFavorite} addFavorite={addFavorite} onAdd={added}/>
                    </InfoWindow>
                )}
            </GoogleMap>
        </LoadScript>
    )
}