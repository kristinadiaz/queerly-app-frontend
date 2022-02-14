import React from 'react' 
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import Map from './Map'

export default function Home({ user, businesses }) {
    if(user) {
        return(
            <div>
                <NavBar />
                <Map businesses={businesses} user={user}/>
            </div>
        )
    } else {
        return <Link to='/'>Please Login</Link>
    }
}