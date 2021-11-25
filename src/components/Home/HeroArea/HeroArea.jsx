import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import HeroPicture from '../../../assets/HeroAreaPicture.png';

import './HeroArea.css';
const HeroArea = () => {
  return (
    <Container className='mt-2 hero-area pt-4 px-5 pb-1'>
      <Row>
        <Col lg={6}>
          <div className='hero-textArea'>
            <h1>Hay There,</h1>
            <h1>I'm MD. Shimul</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              harum nisi rerum, aut aliquid quis at? Deleniti veritatis, qui
              suscipit possimus libero, culpa, saepe mollitia debitis temporibus
              repellendus officiis numquam?
            </p>
            <Button variant='danger' className='resume-download-btn'>
              Resume
            </Button>
          </div>
        </Col>
        <Col lg={6}>
          <img className='img-fluid' src={HeroPicture} alt='' />
        </Col>
      </Row>
    </Container>
  );
};

export default HeroArea;
