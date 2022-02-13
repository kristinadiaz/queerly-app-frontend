import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
const API = 'http://localhost:3000'

export default function SignUp ({ setUser }) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const navigate = useNavigate()

  function handleSubmit (e) {
    e.preventDefault()

    function onSignUp () {
      navigate('/')
    }

    fetch(`${API}/signup`, {
      method: 'POST',
      headers: {
        Accepts: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        email,
        password,
        password_confirmation: passwordConfirmation
      })
    }).then(res => {
      if (res.ok) {
        res.json().then(user => setUser(user))
      }
    })
    onSignUp()
  }

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='violet' textAlign='center'>
          Join Queerly
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
              icon='mail'
              iconPosition='left'
              placeholder='Email'
              type='text'
              id='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
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
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password Confirmation'
              type='password'
              id='password_confirmation'
              value={passwordConfirmation}
              onChange={e => setPasswordConfirmation(e.target.value)}
            />
            <Button fluid basic color='violet' type='submit'>
              Sign Up
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  )
}