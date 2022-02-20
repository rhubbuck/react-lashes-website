import React from 'react';
import './Services.css';
import { Container} from 'react-bootstrap';
import { Card, CardImg, Button, Row, Col } from 'react-bootstrap';
import Lash from './Images/lash-filler-pic.jpeg';

const Services = () => {
  return (
    <div className='services-wrapper'>Services
        <Container className='services-grid'>
            <Row>
                <Col >
                    <Card>
                        <CardImg className='card-image' variant="top" src={Lash} />
                        <Card.Body>
                            <Card.Title>Classic Full Set</Card.Title>
                            <Card.Text>
                            A classic lash set includes one lash extension per natural for a noticeable yet wearable look!
                            Appointment may last longer or shorter depending on the amount of natural lashes you have.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card >
                        <CardImg className='card-image' variant="top" src={Lash} />
                        <Card.Body>
                            <Card.Title>Volume Full Set</Card.Title>
                            <Card.Text>
                            This set is for people who love a voluminous look. Volume lash sets include multiple lash extensions
                            per natural lash for a dramatic glam look. Appointment may last longer or shorter depending 
                            on the amount of natural lashes you have.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
            <Col>
            <Card>
                <CardImg variant="top" src={Lash} />
                <Card.Body>
                    <Card.Title>Mega Volume Full Set</Card.Title>
                    <Card.Text>
                    For the ladies who love GLAM! This set is the fullest you can go with lashes,
                    giving your lashes a dramatic look.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card>
                <CardImg variant="top" src={Lash} />
                <Card.Body>
                    <Card.Title>Luxury classics</Card.Title>
                    <Card.Text>
                    i dont have the text yet aksjdkl fajkd sjfk asjk fjas kjfd kas jdfk
                    ljaksd asjdfk ljas fd jfdskj asdlkjasdlkj sadklj fd dsaf 
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </Col>
            </Row>
            <Card style={{ width: '18rem' }}>
                <CardImg variant="top" src={Lash} />
                <Card.Body>
                    <Card.Title>Hybrid Lashes</Card.Title>
                    <Card.Text>
                    Hybrid lashes is a combination of volume and classic lashes.
                    Choosing hybrid lashes is the best of both worlds giving you volume and length.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Container>
    </div>
  )
}

export default Services