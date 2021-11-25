import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import HeroPicture from '../../../assets/031.png';

import './HeroArea.css';
const HeroArea = () => {
  return (
    <Container className='mt-2'>
      <Row>
        <Col lg={6}>
          <div className='text'>
            <h1>Hi! I Am</h1>
            <h1>MD. Abdul Sattar Shimul</h1>
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
