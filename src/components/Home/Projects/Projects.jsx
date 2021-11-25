import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';

import Project from './Project/Project';

import './Projects.css';
const Projects = () => {
  return (
    <section className='my-5'>
      <Container>
        <div className='d-flex justify-content-between'>
          <h2 className=' project-title fw-bold'>Projects</h2>
          <Button variant='outline-dark' size='sm'>
            View More
          </Button>
        </div>
        <hr />
        <Row className='g-5'>
          <Project />
          <Project />
          <Project />
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
