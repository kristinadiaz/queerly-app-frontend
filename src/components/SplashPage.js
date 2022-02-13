import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Menu } from 'semantic-ui-react'
import splash from '../images/logo-big2.png'

export default function SplashPage () {
  return (
    <div>
      <Menu borderless size='large' style={{ backgroundColor: '#BDE0FE'}}>
        <Menu.Item position='right'>
          <Link to='/login'>Login</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/signup'>Signup</Link>
        </Menu.Item>
      </Menu>
      <Image src={splash} className='logo' />
    </div>
  )
}