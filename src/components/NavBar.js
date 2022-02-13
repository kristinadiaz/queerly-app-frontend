import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Button, Image } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'
import logo from '../images/logo.png'
const API = 'http://localhost:3000'

export default function NavBar ({ user, setUser }) {
  const navigate = useNavigate()

  function onLogout () {
    navigate('/')
  }

  function handleLogout () {
    fetch(`${API}/logout`, {
      method: 'DELETE'
    }).then(res => {
      if (res.ok) {
        setUser()
      }
    })
    onLogout()
  }

  return (
    <div>
      {user ? (
        <>
          <h1>Please Login</h1>
        </>
      ) : (
        <Menu stackable>
          <Menu.Item>
          <Image src={logo} alt='logo' size='mini'/>
          </Menu.Item>
          <Menu.Item>
            <Link to='/profile' className='link-profile'>
              Profile
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/favorite'>
              Favorites List
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Button basic color='blue' onClick={handleLogout}>
              Logout
            </Button>
          </Menu.Item>
        </Menu>
      )}
    </div>
  )
}
