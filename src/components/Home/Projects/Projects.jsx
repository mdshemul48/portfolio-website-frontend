import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Project from './Project/Project';

import './Projects.css';

import ChakaPhoto from '../../../assets/projects/chaka.png';

const projectDetails = [
  {
    title: 'Chaka - A Dream Car Project',
    description:
      'Users can create an order and give reviews from the User Dashboard. Admin control which gives access to all product managements and orders of all users. A dynamic dashboard for managing orders, adding products, and more.',
    image: ChakaPhoto,
    tags: [
      'React',
      'Node',
      'MongoDB',
      'React-Router',
      'Firebase-Auth',
      'React-bootstrap',
      'React-icons',
      'heroku',
    ],
    previewLink: 'https://chaka101.web.app/',
    githubClint: 'https://github.com/mdshemul48/Chaka-car-shop-frontend',
    githubServer: 'https://github.com/mdshemul48/Chaka-car-shop-backend',
  },
];

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
        <Row className='g-3'>
          {projectDetails.map((project) => (
            <Project project={project} key={project.title} />
          ))}
          {/* <Project />
          <Project />
          <Project /> */}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
