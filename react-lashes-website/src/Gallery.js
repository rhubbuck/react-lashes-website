import React from 'react';
import RouteNav from './RouteNav';
import './Gallery.css';
import { Container, Card, CardImg } from 'react-bootstrap';
import Image1 from './Images/IMG_2122.jpg';
import Image2 from './Images/IMG_2128.jpg';
import Image3 from './Images/IMG_2124.jpg';
import Image4 from './Images/IMG_2125.jpg';
import Image5 from './Images/IMG_2126.jpg';
import Image6 from './Images/IMG_2127.jpg';
import Image7 from './Images/IMG_2129.jpg';
import Image8 from './Images/IMG_2130.jpg';
import Image9 from './Images/IMG_2135.jpg';
import Image10 from './Images/IMG_2136.jpg';
import Image11 from './Images/IMG_2133.jpg';
import Image12 from './Images/IMG_2134.jpg';
import Image13 from './Images/IMG_2137.jpg';
import Image14 from './Images/IMG_2138.jpg';
import Image15 from './Images/IMG952145.jpg';

const Gallery = () => {
  return (
    <div className='gallery-page'>
      <RouteNav />
      <Container className='gallery-container'>
      <h3 className='gallery-title'>Gallery</h3>
      <div className='row'>
          <div className='col-md'>
            <Card className='gallery-card'>
                <CardImg className='gallery-image' variant="top" src={Image1}/>
            </Card>
          </div>
          <div className='col-md'>
            <Card className='gallery-card'>
                <CardImg className='gallery-image' variant="top" src={Image2}/>
            </Card>
          </div>
          <div className='col-md'>
            <Card className='gallery-card'>
                <CardImg className='gallery-image' variant="top" src={Image3}/>
            </Card>
          </div>
        </div>
        <div className='row'>
          <div className='col-md'>
            <Card className='gallery-card'>
                <CardImg className='gallery-image' variant="top" src={Image4}/>
            </Card>
          </div>
          <div className='col-md'>
            <Card className='gallery-card'>
                <CardImg className='gallery-image' variant="top" src={Image5}/>
            </Card>
          </div>
          <div className='col-md'>
            <Card className='gallery-card'>
                <CardImg className='gallery-image' variant="top" src={Image6}/>
            </Card>
          </div>
        </div>
        <div className='row'>
          <div className='col-md'>
            <Card className='gallery-card'>
                <CardImg className='gallery-image' variant="top" src={Image7}/>
            </Card>
          </div>
          <div className='col-md'>
            <Card className='gallery-card'>
                <CardImg className='gallery-image' variant="top" src={Image8}/>
            </Card>
          </div>
          <div className='col-md'>
            <Card className='gallery-card'>
                <CardImg className='gallery-image' variant="top" src={Image9}/>
            </Card>
          </div>
        </div>
        <div className='row'>
          <div className='col-md'>
            <Card className='gallery-card'>
                <CardImg className='gallery-image' variant="top" src={Image10}/>
            </Card>
          </div>
          <div className='col-md'>
            <Card className='gallery-card'>
                <CardImg className='gallery-image' variant="top" src={Image11}/>
            </Card>
          </div>
          <div className='col-md'>
            <Card className='gallery-card'>
                <CardImg className='gallery-image' variant="top" src={Image12}/>
            </Card>
          </div>
        </div>
        <div className='row'>
          <div className='col-md'>
            <Card className='gallery-card'>
                <CardImg className='gallery-image' variant="top" src={Image13}/>
            </Card>
          </div>
          <div className='col-md'>
            <Card className='gallery-card'>
                <CardImg className='gallery-image' variant="top" src={Image14}/>
            </Card>
          </div>
          <div className='col-md'>
            <Card className='gallery-card'>
                <CardImg className='gallery-image' variant="top" src={Image15}/>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Gallery