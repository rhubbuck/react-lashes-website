import React from 'react';
import './Services.css';
import { Container} from 'react-bootstrap';
import { Card, CardImg, Button, Row, Col } from 'react-bootstrap';
import Lash from './Images/lash-filler-pic.jpeg';
import Arrow from './Images/arrow-right.svg';

const Services = () => {
  return (
    <div className='services-wrapper'>
        <Container className='services-grid'>
            <Row style={{margin: '15px'}}>
                <Col>
                    <Card className='service-card'>
                        {/* <CardImg className='card-image' variant="top" src={Lash}/> */}
                        <Card.Body>
                            <Card.Title>Classic Full Set <p className='card-time'>2 hours</p></Card.Title>
                            <Card.Text style={{paddingBottom: '43px'}}>
                            A classic lash set includes one lash extension per natural for a noticeable yet wearable look!
                            Appointment may last longer or shorter depending on the amount of natural lashes you have.
                            </Card.Text>
                            <Button className='book-button'>BOOK NOW</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card className='service-card'>
                        {/* <CardImg className='card-image' variant="top" src={Lash} /> */}
                        <Card.Body>
                            <Card.Title>Volume Full Set <p className='card-time'>2 hours 40 min.</p></Card.Title>
                            <Card.Text>
                            This set is for people who love a voluminous look. Volume lash sets include multiple lash extensions
                            per natural lash for a dramatic glam look. Appointment may last longer or shorter depending 
                            on the amount of natural lashes you have.
                            </Card.Text>
                            <Button className='book-button'>BOOK NOW</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row style={{margin: '15px'}}>
                <Col>
                    <Card className='service-card'>
                        {/* <CardImg className='card-image' variant="top" src={Lash} /> */}
                        <Card.Body>
                            <Card.Title>Mega Volume Full Set <p className='card-time'>2 hours 30 min.</p></Card.Title>
                            <Card.Text>
                            For the ladies who love GLAM! This set is the fullest you can go with lashes,
                            giving your lashes a dramatic look.
                            </Card.Text>
                            <Button className='book-button'>BOOK NOW</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card className='service-card'>
                        {/* <CardImg className='card-image' variant="top" src={Lash} /> */}
                        <Card.Body>
                            <Card.Title>Luxury classics <p className='card-time'>2 hours</p></Card.Title>
                            <Card.Text>
                            i dont have the text yet aksjdkl fajkd sjfk asjk fjas kjfd kas jdfk
                            ljaksd asjdfk ljas fd jfdskj asdlkjasdlkj sadklj fd dsaf 
                            </Card.Text>
                            <Button className='book-button'>BOOK NOW</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row style={{margin: '15px'}}>
                <Col>
                    <Card className='service-card'>
                        {/* <CardImg className='card-image' variant="top" src={Lash} /> */}
                        <Card.Body>
                            <Card.Title>Hybrid Lashes <p className='card-time'>2 hours</p></Card.Title>
                            <Card.Text>
                            Hybrid lashes is a combination of volume and classic lashes.
                            Choosing hybrid lashes is the best of both worlds giving you volume and length.
                            </Card.Text>
                            <Button className='book-button'>BOOK NOW</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='service-card'>
                        {/* <CardImg className='card-image' variant="top" src={Lash} /> */}
                        <Card.Body>
                            <Card.Title>Classic Fill In<p className='card-time'>1 hour 30 min.</p></Card.Title>
                            <Card.Text>
                            Book this for your 2-3 week classic fill! If it has been more than 3 weeks
                            since your last classic set/ last fill, please book a full set.
                            </Card.Text>
                            <Button className='book-button'>BOOK NOW</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row style={{margin: '15px'}}>
                <Col sm={6}>
                    <Card className='service-card'>
                        {/* <CardImg className='card-image' variant="top" src={Lash} /> */}
                        <Card.Body>
                            <Card.Title>Hybrid Fill In<p className='card-time'>1 hour 5 min.</p></Card.Title>
                            <Card.Text>
                            I dont have the text yet so ... ksdjakj fdska jfd kfad js
                            kasdjk ask asdfk asfkj safdkj klasdfj ksafdj kasfdjkasfj kfasj ksfd k
                            </Card.Text>
                            <Button className='book-button'>BOOK NOW</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='service-card' id='gallery-card'>
                        <h3 className='service-gallery-text'>View my gallery!</h3>
                        <Button className='service-arrow-button'><img src={Arrow} alt='arrow button' style={{width: '25px'}}/></Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Services