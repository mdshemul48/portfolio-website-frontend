/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { BiCloudDownload, BiRocket } from 'react-icons/bi';

import HeroPicture from '../../../assets/HeroAreaPicture.png';

import './HeroArea.css';
const HeroArea = () => {
  return (
    <header className='hero-area py-3'>
      <Container className='pt-4 px-5 pb-1'>
        <Row>
          <Col lg={6}>
            <div className='hero-textArea'>
              <h1>Hay There,</h1>
              <h1>I'm MD. Shimul</h1>
              <h5 className='my-3 fw-bolder'>Full Stack Developer</h5>
              <p>
                Highly motivated and dedicated software developer looking for a
                challenging opportunity in software development to demonstrate
                my programming skills.
              </p>
              <div className='my-3'>
                <a
                  href='https://github.com/mdshemul48'
                  target='_blank'
                  alt='github_link'
                >
                  <img
                    src='https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white'
                    alt='github'
                    className='me-2'
                  />
                </a>
                <a
                  href='https://www.linkedin.com/in/mdshemul48/'
                  target='_blank'
                  alt='linkedin_link'
                >
                  <img
                    src='https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white'
                    alt='linkedin'
                    className='me-2'
                  />
                </a>
                <a
                  href='https://www.facebook.com/mdshemul48'
                  target='_blank'
                  alt='facebook_link'
                >
                  <img
                    src='https://img.shields.io/badge/Facebook-%231877F2.svg?style=for-the-badge&logo=Facebook&logoColor=white'
                    alt='facebook'
                    className='me-2'
                  />
                </a>
              </div>
              <Button variant='dark' className='project-btn me-1'>
                <BiRocket /> Projects
              </Button>
              <Button variant='outline-dark' className='resume-download-btn'>
                <BiCloudDownload /> Resume
              </Button>
            </div>
          </Col>
          <Col lg={6}>
            <img className='img-fluid' src={HeroPicture} alt='' />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default HeroArea;
