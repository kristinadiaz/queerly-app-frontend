import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Card, Image, Icon } from 'semantic-ui-react'; 

export default function BusinessCard({ bus, handleClick }) {
    const navigate = useNavigate()

    function onFavorite() {
        navigate('/favorite')
    }

    return(
        <Card key={bus.id} onClick={() => handleClick(bus)} navigate={onFavorite}>
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
            <Card.Content extra>
                <a>
                <Icon name='heart'/> Add To Favorites
                </a>
            </Card.Content>
        </Card>
    )
}

// onClick={() => handleClick(bus)}