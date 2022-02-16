import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Segment, Grid, Header, Button, Dropdown } from 'semantic-ui-react'

const API = 'http://localhost:3000'

export default function Review ({ user, businesses, setReview }) {
  const [comment, setComment] = useState('')
  const [rating, setRating] = useState('')
  const navigate = useNavigate()

  const businessOptions = businesses.map(business => {
      return({
          key: business.id,
          text: business.name,
          value: business.name
      })
  })

  // console.log(businessOptions)

  function onReview () {
    navigate('/home')
  }

  function handleReview (e) {
    e.preventDefault()

    fetch(`${API}/reviews`, {
      method: 'POST',
      headers: {
        Accepts: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        comment,
        rating,
        user_id: user.id,
        business_id: businesses.id
      })
    }).then(res => {
      console.log(res)
      if (res.ok) {
        res.json().then(review => setReview(review))
      }
    })
    onReview()
  }

  return (
    <Grid textAlign='left' style={{ height: '100vh' }} verticalAlign='top'>
      <Grid.Column style={{ maxWidth: 500 }}>
        <Header as='h2' color='orange' textAlign='center'>
          Review
        </Header>
        <Form onSubmit={handleReview} size='large'>
          <Segment raised>
            <Form.Input
              fluid
              placeholder='Review here'
              type='text'
              id='comment'
              value={comment}
              onChange={e => setComment(e.target.value)}
            />
            <Form.Input
              defaultRating={0}
              maxRating={5}
              type='number'
              id='rating'
              value={rating}
              onChange={e => setRating(e.target.value)}
            />
            <Dropdown
              placeholder='Select Business'
              fluid
              selection
              options={businessOptions}
            />
            <Button fluid basic color='orange' type='submit'>
              Submit
            </Button>
            <Button fluid basic color='orange' type='submit'>
              Delete
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  )
}
