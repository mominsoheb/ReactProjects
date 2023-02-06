import React from 'react'
import Card from 'react-bootstrap/Card';

const FruitCard = (props) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{props.fruitName}</Card.Title>
          <Card.Text>
            <div>
              <h3>Price:{props.price}</h3>
              <h6>Discount: {props.discount}</h6>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>

    </div>
  )
}

export default FruitCard
