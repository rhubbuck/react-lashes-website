import React from 'react';
import './Services.css';
import { Container} from 'react-bootstrap';
import { Card, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Lash from './Images/lash-filler-pic.jpeg';
import Arrow from './Images/arrow-right.svg';

const Services = () => {
  return (
    <div className='services-wrapper'>
        <h1 className='services-title'>My Eyelash Extensions</h1>
        <div className='service-images-wrapper'>
            <div className='services-type'>
                <img className='services-lash-image' src={Lash} alt='lashes'/>
                <h3>Classic</h3>
            </div>
            <div className='services-type'>
                <img className='services-lash-image' src={Lash} alt='lashes'/>
                <h3>Volume</h3>
            </div>
            <div className='services-type'>
                <img className='services-lash-image' src={Lash} alt='lashes'/>
                <h3>Luxury</h3>
            </div>
            <div className='services-type'>
                <img className='services-lash-image' src={Lash} alt='lashes'/>
                <h3>Hybrid</h3>
            </div>
        </div>
        <h1 className='info-pricing'>Info and Pricing</h1>
        <Container className='services-grid'>
            <div className='row'>
                <div className='col-md'>
                    <Card className='service-card'>
                        {/* <CardImg className='card-image' variant="top" src={Lash}/> */}
                        <Card.Body>
                            <Card.Title>Classic Full Set <p className='card-time'>2 hours</p></Card.Title>
                            <Card.Text id='card-1' >
                            A classic lash set includes one lash extension per natural for a noticeable yet wearable look!
                            Appointment may last longer or shorter depending on the amount of natural lashes you have.
                            </Card.Text>
                            <a className='book-button' target='_blank' href='https://lashesbyandreaa.as.me/' rel="noreferrer">BOOK NOW</a>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-md'>
                    <Card className='service-card'>
                        {/* <CardImg className='card-image' variant="top" src={Lash} /> */}
                        <Card.Body>
                            <Card.Title>Volume Full Set <p className='card-time'>2 hours 40 min.</p></Card.Title>
                            <Card.Text>
                            This set is for people who love a voluminous look. Volume lash sets include multiple lash extensions
                            per natural lash for a dramatic glam look. Appointment may last longer or shorter depending 
                            on the amount of natural lashes you have.
                            </Card.Text>
                            <a className='book-button' target='_blank' href='https://lashesbyandreaa.as.me/' rel="noreferrer">BOOK NOW</a>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className='row'>
                <div className='col-md'>
                    <Card className='service-card'>
                        {/* <CardImg className='card-image' variant="top" src={Lash} /> */}
                        <Card.Body>
                            <Card.Title>Mega Volume Full Set <p className='card-time'>2 hours 30 min.</p></Card.Title>
                            <Card.Text>
                            For the ladies who love GLAM! This set is the fullest you can go with lashes,
                            giving your lashes a dramatic look.
                            </Card.Text>
                            <a className='book-button' target='_blank' href='https://lashesbyandreaa.as.me/' rel="noreferrer">BOOK NOW</a>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-md'>
                    <Card className='service-card'>
                        {/* <CardImg className='card-image' variant="top" src={Lash} /> */}
                        <Card.Body>
                            <Card.Title>Luxury classics <p className='card-time'>2 hours</p></Card.Title>
                            <Card.Text>
                            i dont have the text yet aksjdkl fajkd sjfk asjk fjas kjfd kas jdfk
                            ljaksd asjdfk ljas fd jfdskj asdlkjasdlkj sadklj fd dsaf 
                            </Card.Text>
                            <a className='book-button' target='_blank' href='https://lashesbyandreaa.as.me/' rel="noreferrer">BOOK NOW</a>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className='row'>
                <div className='col-md'>
                    <Card className='service-card'>
                        {/* <CardImg className='card-image' variant="top" src={Lash} /> */}
                        <Card.Body>
                            <Card.Title>Hybrid Lashes <p className='card-time'>2 hours</p></Card.Title>
                            <Card.Text>
                            Hybrid lashes is a combination of volume and classic lashes.
                            Choosing hybrid lashes is the best of both worlds giving you volume and length.
                            </Card.Text>
                            <a className='book-button' target='_blank' href='https://lashesbyandreaa.as.me/' rel="noreferrer">BOOK NOW</a>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-md'>
                    <Card className='service-card'>
                        {/* <CardImg className='card-image' variant="top" src={Lash} /> */}
                        <Card.Body>
                            <Card.Title>Classic Fill In<p className='card-time'>1 hour 30 min.</p></Card.Title>
                            <Card.Text>
                            Book this for your 2-3 week classic fill! If it has been more than 3 weeks
                            since your last classic set/ last fill, please book a full set.
                            </Card.Text>
                            <a className='book-button' target='_blank' href='https://lashesbyandreaa.as.me/' rel="noreferrer">BOOK NOW</a>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className='row'>
                <div className='col-md'>
                    <Card className='service-card'>
                        {/* <CardImg className='card-image' variant="top" src={Lash} /> */}
                        <Card.Body>
                            <Card.Title>Hybrid Fill In<p className='card-time'>1 hour 5 min.</p></Card.Title>
                            <Card.Text>
                            I dont have the text yet so ... ksdjakj fdska jfd kfad js
                            kasdjk ask asdfk asfkj safdkj klasdfj ksafdj kasfdjkasfj kfasj ksfd k
                            </Card.Text>
                            <a className='book-button' target='_blank' href='https://lashesbyandreaa.as.me/' rel="noreferrer">BOOK NOW</a>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-md'>
                    <Card className='service-card' id='gallery-card'>
                        <h3 className='service-gallery-text'>View my gallery!</h3>
                        <Button className='service-arrow-button'>
                            <Link to='/gallery'>
                                <img src={Arrow} alt='arrow button' style={{width: '44px'}}/>
                            </Link>
                        </Button>
                    </Card>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Services