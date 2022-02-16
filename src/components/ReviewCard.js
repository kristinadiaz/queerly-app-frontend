import React from 'react' 
import { Card, Icon } from 'semantic-ui-react'

export default function ReviewCard({ review, user, business }) {

    return(  
        <Card>
            <Card.Content header='Business Name' />
            <Card.Content description={review.comment} />
            <Card.Content extra>
                <Icon name='heart' /> {review.rating}
            </Card.Content>
        </Card>
    )
}