import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Project from '../Home/Projects/Project/Project';

import projectDetails from '../Home/Projects/projectDetail';

const Projects = () => {
  return (
    <section className='my-5'>
      <Container>
        <Row className='g-3'>
          {projectDetails.map((project) => (
            <Project project={project} key={project.title} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
