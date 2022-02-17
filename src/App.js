import React, { useState, useEffect } from 'react' 
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import SplashPage from './components/SplashPage'
import Login from './components/Login'
import SignUp from './components/SignUp'
import BusinessFavorite from './components/BusinessFavorite'
import Review from './components/Review'

const API = 'http://localhost:3000'

export default function App() {
  const [user, setUser] = useState()
  const [businesses, setBusinesses] = useState([])

  useEffect(() => {
    fetch(`${API}/businesses`)
    .then(res => res.json())
    .then(data => setBusinesses(data))
  }, [])

  function addFavorite (bus) {
    setBusinesses(
      businesses.map(b => (b.id === bus.id ? { ...b, added: true } : b))
    )
  }

  function removeFavorite(bus) {
    setBusinesses(
      businesses.map(b => (b.id === bus.id ? {...b, added: false} : b))
    )
  }

  return(
    <div>
      <Routes>
        <Route path='/' element={<SplashPage />} />
        <Route path='/home' element={<Home user={user} setUser={setUser} businesses={businesses} addFavorite={addFavorite} />} />
        <Route path='/login' element={<Login user={user} setUser={setUser} />} />
        <Route path='/signup' element={<SignUp setUser={setUser} />} />
        <Route path='/favorite' element={<BusinessFavorite bus={businesses}  addFavorite={addFavorite} removeFavorite={removeFavorite} />} />
        <Route path='/reviews' element={<Review user={user} />} />
      </Routes>
    </div>
  )
}