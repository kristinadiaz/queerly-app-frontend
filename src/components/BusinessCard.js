import React from 'react'
import { Card, Image } from 'semantic-ui-react'; 

export default function BusinessCard({ bus, handleClick }) {
    return(
        <Card key={bus.id} onClick={() => handleClick(bus)}>
            <Image src={bus.image} />
            <Card.Content>
                <Card.Header>{bus.name}</Card.Header>
                <Card.Meta>
                    <span>{bus.address}</span>
                </Card.Meta>
                <Card.Meta>
                    <span>{bus.phone}</span>
                </Card.Meta>
                <Card.Meta>
                    <span>{bus.web}</span>
                </Card.Meta>
                <Card.Description>
                    {bus.description}
                </Card.Description>
            </Card.Content>
        </Card>
    )
}