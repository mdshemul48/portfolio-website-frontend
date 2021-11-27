import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';

import Project from './Project/Project';

import './Projects.css';
const Projects = () => {
  return (
    <section className='my-5'>
      <Container>
        <div className='text-center'>
          <h1 className='project-title fw-bold'>Work</h1>
          <p className='m-0 text-secondary fw-light'>
            Check my commercial and non-commercial projects.
          </p>
          <p className='m-0 mb-4 text-secondary fw-light'>
            {' '}
            If you have any questions feel free to ask me for more information
          </p>
        </div>
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
