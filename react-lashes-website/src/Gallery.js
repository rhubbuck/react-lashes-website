import React from 'react';
import RouteNav from './RouteNav';
import './Gallery.css';
import { Container, Row, Col, Card, CardImg } from 'react-bootstrap';
import Lash from './Images/lash-filler-pic.jpeg';

const Gallery = () => {
  return (
    <div className='gallery-page'>
      <RouteNav />
      <Container className='gallery-container'>
        <Row >
          <Col>
            <Card className='gallery-card'>
                <CardImg className='gallery-image' variant="top" src={Lash}/>
            </Card>
          </Col>
          <Col>
            <Card className='gallery-card'>
                <CardImg className='gallery-image' variant="top" src={Lash} />
            </Card>
          </Col>
          <Col>
            <Card className='gallery-card'>
                <CardImg className='gallery-image' variant="top" src={Lash} />
            </Card>
          </Col>
        </Row>
        <Row >
          <Col>
            <Card className='gallery-card'>
                <CardImg className='gallery-image' variant="top" src={Lash}/>
            </Card>
          </Col>
          <Col>
            <Card className='gallery-card'>
                <CardImg className='gallery-image' variant="top" src={Lash} />
            </Card>
          </Col>
          <Col>
            <Card className='gallery-card'>
                <CardImg className='gallery-image' variant="top" src={Lash} />
            </Card>
          </Col>
        </Row>
        <Row >
          <Col>
            <Card className='gallery-card'>
                <CardImg className='gallery-image' variant="top" src={Lash}/>
            </Card>
          </Col>
          <Col>
            <Card className='gallery-card'>
                <CardImg className='gallery-image' variant="top" src={Lash} />
            </Card>
          </Col>
          <Col>
            <Card className='gallery-card'>
                <CardImg className='gallery-image' variant="top" src={Lash} />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Gallery