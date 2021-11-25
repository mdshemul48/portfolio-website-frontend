import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { BiCloudDownload ,BiRocket} from 'react-icons/bi';

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
             Highly motivated professional software engineer, familiar with a variety of programming languages, including JavaScript, Python. I’m always adding new skills to my repertoire. Looking for an opportunity to demonstrate my programming skills.

            </p>
            <Button variant='danger' className='project-btn me-1'>
              <BiRocket />  Projects
            </Button>
            <Button variant='outline-danger' className='resume-download-btn'>
              <BiCloudDownload /> Resume
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
