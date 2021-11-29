import React from 'react';
import { Badge, Button, Col } from 'react-bootstrap';
import { FiEye } from 'react-icons/fi';
import { BsGithub } from 'react-icons/bs';

import './Project.css';
const Project = ({ project }) => {
  const {
    title,
    description,
    image,
    tags,
    previewLink,
    githubLink,
    githubClint,
    githubServer,
  } = project;

  return (
    <Col lg={4}>
      <div className='home-project p-2 rounded'>
        <img src={image} className='img-fluid ' alt='' />
        <div>
          <h5 className='fw-bold mt-3 mb-2'>{title}</h5>
          <div className='project-tags my-1'>
            {tags.map((tag, index) => (
              <Badge
                pill
                bg='light'
                text='dark'
                className='project-tag'
                key={index}
              >
                #{tag}
              </Badge>
            ))}
          </div>
          <p className='text-secondary '>{description.substr(0, 150)}...</p>
          <div>
            {githubLink && (
              <Button
                variant='dark view-details-btn'
                href={githubLink}
                target='_blink'
              >
                <BsGithub /> Github
              </Button>
            )}
            {githubClint && (
              <Button
                variant='dark view-details-btn'
                href={githubClint}
                target='_blink'
              >
                <BsGithub /> Client Side
              </Button>
            )}
            {githubServer && (
              <Button
                variant='dark view-details-btn'
                className='ms-2'
                href={githubServer}
                target='_blink'
              >
                <BsGithub /> Server Side
              </Button>
            )}
            {previewLink && (
              <Button
                variant=''
                className='ms-2'
                href={previewLink}
                target='_blink'
              >
                <FiEye /> Preview
              </Button>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Project;
