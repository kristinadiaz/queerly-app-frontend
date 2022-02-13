import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Segment, Message } from 'semantic-ui-react'
const API = 'http://localhost:3000'

export default function Login ({ setUser }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function onLoggedIn () {
    navigate('/home')
  }

  function handleSubmit (e) {
    e.preventDefault()

    fetch(`${API}/login`, {
      method: 'POST',
      headers: {
        Accepts: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    }).then(res => {
      if (res.ok) {
        res.json().then(user => setUser(user))
      }
    })
    onLoggedIn()
  }

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='purple' textAlign='center'>
          Welcome to Queerly
        </Header>
        <Form onSubmit={handleSubmit} size='large'>
          <Segment raised>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='Username'
              type='text'
              id='username'
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              id='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Button fluid basic color='purple' type='submit'>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          Need an account? <Link to='/signup'>Signup</Link>
        </Message>
      </Grid.Column>
    </Grid>
  )
}