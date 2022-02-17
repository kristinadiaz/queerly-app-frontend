import React from 'react'
import { Card, Icon, Grid, Button } from 'semantic-ui-react'

const API = 'http://localhost:3000'

export default function ReviewCard ({ reviews, onDeleteReview }) {
  const id = reviews.id
  console.log(id)

  function deleteReview() {
    fetch(`${API}/reviews/${id}`, {
      method: 'DELETE',
    }).then(res => {
      if(res.ok) {
        onDeleteReview(id)
      }
    })
  }

  // function updateReview(e) {
  //   e.preventDefault()

  //   fetch(`${API}/reviews/${id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       comment,
  //       rating
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(updateReview => {
  //       onUpdateReview(updateReview)
  //   })
  //   }
  
  return (
    <Grid padded className='review-cards'>
      <Grid.Row>
        <Grid.Column>
          <Card>
            <Card.Content header='Business Name' />
            <Card.Content 
            description={reviews.comment}/>
            <Card.Content extra>
              <Icon name='heart' color='red'/> {reviews.rating}
            </Card.Content>
            <Card.Content textAlign='center'>
              {/* <Button onClick={updateReview}>Update</Button> */}
              <Button onClick={deleteReview}>Delete</Button>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}