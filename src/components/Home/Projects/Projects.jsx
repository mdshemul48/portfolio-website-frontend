import React from 'react';
import { Button, Container } from 'react-bootstrap';

import './Projects.css';
const Projects = () => {
  return (
    <section className='mt-5'>
      <Container>
        <div className='d-flex justify-content-between'>
          <h2 className=' project-title fw-bold'>Projects</h2>
          <Button variant='outline-dark' size='sm'>
            View More
          </Button>
        </div>
        <hr />
      </Container>
    </section>
  );
};

export default Projects;
