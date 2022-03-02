import React from 'react';
import './Services.css';
import { Container} from 'react-bootstrap';
import { Card, Button, Row } from 'react-bootstrap';
import { Link as RouterLink } from 'react-router-dom';
import Lash from './Images/lash-filler-pic.jpeg';
import Arrow from './Images/arrow-right.svg';
import BackgroundTwo from './BackgroundTwo';
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
        <h1 className='services-title'>My Eyelash Extensions</h1>
        <div className='service-images-wrapper'>
            <Link 
            className='services-type'
            activeClass="active"
            to="card-1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={300}>
                {/* <img className='services-lash-image' src={Lash} alt='lashes'/> */}
                <div className='service-lash-image-1'>
                    <div className='service-type-filter'>
                        <p className='service-type-label'>Classic</p>
                    </div>
                </div>
                {/* <h3>Classic</h3> */}
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
        {/* <BackgroundTwo /> */}
        <div className='info-container'>
        <h1 className='info-pricing'>Info and Pricing</h1>
        <Container className='services-grid'>
            <div className='row'>
                <div className='col-md'>
                    <Card className='service-card' id='card-1'>
                        {/* <CardImg className='card-image' variant="top" src={Lash}/> */}
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
                    <Card className='service-card' id='card-3'>
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
                    <Card className='service-card' id='card-4'>
                        {/* <CardImg className='card-image' variant="top" src={Lash} /> */}
                        <Card.Body>
                            <Card.Title>Luxury classics <p className='card-time'>2 hours</p></Card.Title>
                            <Card.Text>
                            i dont have the text yet aksjdkl fajkd sjfk asjk fjas kjfd kas jdfk
                            ljaksd asjdfk ljas fd jfdskj asdlkjasdlkj sadklj 
                            </Card.Text>
                            <a className='book-button' target='_blank' href='https://lashesbyandreaa.as.me/' rel="noreferrer">BOOK NOW</a>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className='row'>
                <div className='col-md'>
                    <Card className='service-card' id='card-5'>
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
                    <Card className='service-card' id='card-6'>
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
                    <Card className='service-card' id='card-7'>
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