import React from 'react';
import './Services.css';
import { Container} from 'react-bootstrap';
import { Card, Button, Row } from 'react-bootstrap';
import { Link as RouterLink } from 'react-router-dom';
import Arrow from './Images/arrow-right.svg';
import { Link, animateScroll } from 'react-scroll';

const Services = () => {
  return (
    <div className='services-wrapper'>
    <div class="custom-shape-divider-top-1646243444">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
    </svg>
</div>
    <div className='hero-cutout'></div>
    <div className='services-container'>
        <p className='intro-text'> SAY <em>YES</em> TO LASH EXTENSIONS WITH QUALITY YOU CAN TRUST!</p>
        <h1 className='services-title'>My Services</h1>
        <div className='service-images-wrapper'>
            <Link 
            className='services-type'
            activeClass="active"
            to="card-1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={300}>
                <div className='service-lash-image-1'>
                    <div className='service-type-filter'>
                        <p className='service-type-label'>Classic</p>
                    </div>
                </div>
            </Link>
            <Link 
            className='services-type'
            activeClass="active"
            to="card-2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={300}>
                <div className='service-lash-image-2'>
                    <div className='service-type-filter'>
                        <p className='service-type-label'>Volume</p>
                    </div>
                </div>
            </Link>
            <Link 
            className='services-type'
            activeClass="active"
            to="card-5"
            spy={true}
            smooth={true}
            offset={-70}
            duration={300}>
                <div className='service-lash-image-3'>
                    <div className='service-type-filter'>
                        <p className='service-type-label'>Hybrid</p>
                    </div>
                </div>
            </Link>
        </div>
        </div>
        <div className='info-container'>
        <h1 className='info-pricing'>Info and Pricing</h1>
        <Container className='services-grid'>
            <div className='row'>
                <div className='col-md'>
                    <Card className='service-card' id='card-1'>
                        <Card.Body>
                            <Card.Title>Classic Full Set <p className='card-time'>2 hours</p></Card.Title>
                            <Card.Text id='card-1-text' >
                            A classic lash set includes one lash extension per natural for a noticeable yet wearable look!
                            Appointment may last longer or shorter depending on the amount of natural lashes you have.
                            </Card.Text>
                            <a className='book-button' target='_blank' href='https://lashesbyandreaa.as.me/' rel="noreferrer">BOOK NOW</a>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-md'>
                    <Card className='service-card' id='card-2'>
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
                    <Card className='service-card' id='card-3'>
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
                    <Card className='service-card' id='card-4'>
                        <Card.Body>
                            <Card.Title>Luxury classics <p className='card-time'>2 hours</p></Card.Title>
                            <Card.Text>
                            This is a fuller version of classic lashes.
                            Luxury classics give a fuller look, but still keep everything natural looking. 
                            </Card.Text>
                            <a className='book-button' target='_blank' href='https://lashesbyandreaa.as.me/' rel="noreferrer">BOOK NOW</a>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className='row'>
                <div className='col-md'>
                    <Card className='service-card' id='card-5'>
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
                    <Card className='service-card' id='card-6'>
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
                    <Card className='service-card' id='card-7'>
                        <Card.Body>
                            <Card.Title>Hybrid Fill In<p className='card-time'>1 hour 5 min.</p></Card.Title>
                            <Card.Text>
                            Book this for your 2-3 week hybrid fill! If it has been more than 3 weeks
                            since your last classic set/ last fill, please book a full set.
                            </Card.Text>
                            <a className='book-button' target='_blank' href='https://lashesbyandreaa.as.me/' rel="noreferrer">BOOK NOW</a>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-md'>
                    <Card className='service-card' id='gallery-card'>
                        <h3 className='service-gallery-text'>View my work!</h3>
                        <Button className='service-arrow-button'>
                            <RouterLink to='/gallery'>
                                <img src={Arrow} alt='arrow button' style={{width: '44px'}}/>
                            </RouterLink>
                        </Button>
                    </Card>
                </div>
            </div>
        </Container>
    </div>
     </div>
  )
}

export default Services