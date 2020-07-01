import React from 'react'
import {Card} from 'react-bootstrap'
import './card-component-styles.css'

const DtcCardComponent = props => {
    return (
        <div>
            <Card className="card" onClick={props.onClick}>
            <Card.Img variant="top" className='card-img'src={props.cardImg} alt="image" />
            <Card.Body>
                <Card.Title className='card-title'>{props.cardTitle}</Card.Title>
                <Card.Text className='card-text'>
                {props.cardText}
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}



export default DtcCardComponent
