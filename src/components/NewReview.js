import React, { useState } from 'react' 
import { useNavigate } from 'react-router-dom'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

const API = 'http://localhost:3000'

export default function NewReview({ setReviews, user }) {
    const [comment, setComment] = useState('')
    const [rating, setRating] = useState(0)
    const navigate = useNavigate()

    function handleReview(e) {
        e.preventDefault()

        function onReviewSubmit() {
            navigate('/home')
        }

        fetch(`${API}/reviews`, {
            method: 'POST',
            headers: {
                Accepts: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                comment,
                rating,
                user_id: user.id
            })
        }).then(res => {
            if(res.ok) {
                res.json().then(review => setReviews(review))
            }
        })
        onReviewSubmit()
    }

    return(
        <Grid style={{ height: '30vh' }} verticalAlign='center' className='review'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='orange' textAlign='center'>
                    Add Review
                </Header>
                <Form onSubmit={handleReview} size='large'>
                    <Segment raised>
                        <Form.Input 
                        fluid 
                        icon='comment'
                        iconPosition='left'
                        placeholder='Comment'
                        type='text'
                        id='comment'
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        />
                        <Form.Input
                        fluid 
                        icon='heart'
                        iconPosition='left'
                        placeholder='Rating'
                        type='number'
                        id='rating'
                        value={rating}
                        onChange={e => setRating(e.target.value)} 
                        />
                        <Button fluid basic color='orange' type='submit'>
                            Submit
                        </Button>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    )
}