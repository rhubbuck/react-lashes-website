import React from 'react';
import RouteNav from './RouteNav';
import './Gallery.css';
import { Container, Card, CardImg } from 'react-bootstrap';
import Lash from './Images/lash-filler-pic.jpeg';

const Gallery = () => {
  return (
    <div className='gallery-page'>
      <RouteNav />
      <Container className='gallery-container'>
      <h3 className='gallery-title'>Gallery</h3>
      <div className='row'>
          <div className='col-md'>
            <Card className='gallery-card'>
                <CardImg className='gallery-image' variant="top" src={Lash}/>
            </Card>
          </div>
          <div className='col-md'>
            <Card className='gallery-card'>
                <CardImg className='gallery-image' variant="top" src={Lash}/>
            </Card>
          </div>
          <div className='col-md'>
            <Card className='gallery-card'>
                <CardImg className='gallery-image' variant="top" src={Lash}/>
            </Card>
          </div>
        </div>
        <div className='row'>
          <div className='col-md'>
            <Card className='gallery-card'>
                <CardImg className='gallery-image' variant="top" src={Lash}/>
            </Card>
          </div>
          <div className='col-md'>
            <Card className='gallery-card'>
                <CardImg className='gallery-image' variant="top" src={Lash}/>
            </Card>
          </div>
          <div className='col-md'>
            <Card className='gallery-card'>
                <CardImg className='gallery-image' variant="top" src={Lash}/>
            </Card>
          </div>
        </div>
        <div className='row'>
          <div className='col-md'>
            <Card className='gallery-card'>
                <CardImg className='gallery-image' variant="top" src={Lash}/>
            </Card>
          </div>
          <div className='col-md'>
            <Card className='gallery-card'>
                <CardImg className='gallery-image' variant="top" src={Lash}/>
            </Card>
          </div>
          <div className='col-md'>
            <Card className='gallery-card'>
                <CardImg className='gallery-image' variant="top" src={Lash}/>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Gallery