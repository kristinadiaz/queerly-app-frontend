import React from 'react' 
import { Grid } from 'semantic-ui-react'
import BusinessCard from './BusinessCard'

export default function BusinessFavorite({ bus, removeFavorite }) {
    return(
        <div className='cards'>
            {
                bus.filter((b) => {
                    if(b.added) {
                        return b.added
                    }
                }).map((bus) => 
                <BusinessCard key={bus.id} bus={bus} handleClick={removeFavorite} removeFavorite={removeFavorite} />
                )
            }
        </div>
    )
}