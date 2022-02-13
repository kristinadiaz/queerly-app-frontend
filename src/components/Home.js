import React from 'react' 
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

export default function Home({ user }) {
    if(user) {
        return(
            <div>
                <NavBar />
            </div>
        )
    } else {
        return <Link to='/'>Please Login</Link>
    }
}