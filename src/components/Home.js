import React from 'react' 
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import Map from './Map'

export default function Home({ user, businesses, addFavorite }) {
    if(user) {
        return(
            <div>
                <NavBar />
                <Map businesses={businesses} user={user} addFavorite={addFavorite} />
            </div>
        )
    } else {
        return <Link to='/'>Please Login</Link>
    }
}