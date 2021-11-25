import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { BiCloudDownload, BiRocket } from 'react-icons/bi';

import HeroPicture from '../../../assets/HeroAreaPicture.png';

import './HeroArea.css';
const HeroArea = () => {
  return (
    <Container className='mt-4 hero-area pt-4 px-5 pb-1'>
      <Row>
        <Col lg={6}>
          <div className='hero-textArea'>
            <h1>Hay There,</h1>
            <h1>I'm MD. Shimul</h1>
            <h5 className='my-3 fw-bolder'>Full Stack Developer</h5>
            <p>
              Highly motivated professional software engineer, familiar with a
              variety of programming languages, including JavaScript, Python.
              I’m always adding new skills to my repertoire. Looking for an
              opportunity to demonstrate my programming skills.
            </p>
            <div className='my-3'>
              <img
                src='https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white'
                alt='github'
                className='me-2'
              />
              <img
                src='https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white'
                alt='linkedin'
                className='me-2'
              />
              <img
                src='https://img.shields.io/badge/Facebook-%231877F2.svg?style=for-the-badge&logo=Facebook&logoColor=white'
                alt='facebook'
                className='me-2'
              />
            </div>
            <Button variant='danger' className='project-btn me-1'>
              <BiRocket /> Projects
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
