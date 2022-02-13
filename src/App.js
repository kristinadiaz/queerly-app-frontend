import React, { useState, useEffect } from 'react' 
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import SplashPage from './components/SplashPage'
import Login from './components/Login'
import SignUp from './components/SignUp'

const API = 'http://localhost:3000'

export default function App() {
  const [user, setUser] = useState()

  useEffect(() => {
    fetch(`${API}/me`)
    .then(res => {
      if(res.ok) {
        res.json().then(user => setUser(user));
      }
    });
  }, [])

  return(
    <div>
      <Routes>
        <Route path='/' element={<SplashPage />} />
        <Route path='/home' element={<Home user={user} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  )
}