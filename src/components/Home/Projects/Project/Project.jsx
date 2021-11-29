import React from 'react';
import { Badge, Button, Col } from 'react-bootstrap';
import { FiEye } from 'react-icons/fi';
import { BsTextRight } from 'react-icons/bs';

import tempPicture from '../../../../assets/temp.jpg';
import './Project.css';
const Project = () => {
  return (
    <Col lg={4}>
      <div className='home-project p-2 rounded'>
        <img src={tempPicture} className='img-fluid ' alt='' />
        <div>
          <h5 className='fw-bold mt-3 mb-2'>
            Complete blog site with mern redux
          </h5>
          <div className='project-tags my-1'>
            <Badge pill bg='light' text='dark' className='project-tag'>
              #Javascript
            </Badge>
            <Badge pill bg='light' text='dark' className='project-tag'>
              #React
            </Badge>
            <Badge pill bg='light' text='dark' className='project-tag'>
              #NodeJs
            </Badge>
            <Badge pill bg='light' text='dark' className='project-tag'>
              #MongoDb
            </Badge>
          </div>
          <p className='text-secondary '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            iusto deleniti repudiandae ad debitis...
          </p>
          <div>
            <Button variant='dark view-details-btn'>
              <BsTextRight /> View Details
            </Button>
            <Button variant='' className='ms-2'>
              <FiEye /> Preview
            </Button>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Project;
