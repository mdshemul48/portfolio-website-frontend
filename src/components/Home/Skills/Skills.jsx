import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

// images
import SkillsImage from '../../../assets/skills.png';

// all skills icons
import HtmlIcon from '../../../assets/skills-icons/html-5.png';
import javascriptIcon from '../../../assets/skills-icons/javascript.png';
import typeScriptIcon from '../../../assets/skills-icons/typescript.png';
import muiIcon from '../../../assets/skills-icons/mui.png';
import CssIcon from '../../../assets/skills-icons/css.png';
import bootstrapIcon from '../../../assets/skills-icons/bootstrap.png';
import expressIcon from '../../../assets/skills-icons/express.png';
import firebaseIcon from '../../../assets/skills-icons/firebase.png';
import mongodbIcon from '../../../assets/skills-icons/mongodb.png';
import nodejsIcon from '../../../assets/skills-icons/Node.png';
import tailwindIcon from '../../../assets/skills-icons/tailwind.jpg';
import githubIcon from '../../../assets/skills-icons/github.png';
import herokuIcon from '../../../assets/skills-icons/heroku.png';
import pythonIcon from '../../../assets/skills-icons/python.png';
import reactIcon from '../../../assets/skills-icons/react.png';

const icons = [
  javascriptIcon,
  typeScriptIcon,
  pythonIcon,
  reactIcon,
  nodejsIcon,
  expressIcon,
  mongodbIcon,
  bootstrapIcon,
  tailwindIcon,
  muiIcon,
  firebaseIcon,
  HtmlIcon,
  CssIcon,
  githubIcon,
  herokuIcon,
];

const SkillHeaderContainer = styled.div`
  & h1 {
    font-size: 2.5rem;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 1rem;
  }
`;

const SkillsContainer = styled.div`
  background-color: #b4ffe4;
  & > .skills-sub-container {
    padding: 2rem 0 3rem;
  }
  & .skills-main-image {
    margin-top: 60 px;
  }
  & .skill-icon {
    border-radius: 10%;
    background-color: white;
  }
`;

const Skills = () => {
  return (
    <section>
      <SkillHeaderContainer className='container'>
        <h1>My Skills</h1>
      </SkillHeaderContainer>
      <SkillsContainer>
        <Container className='skills-sub-container'>
          <Row>
            <Col lg={6}>
              <Row className='g-1 mt-3'>
                {icons.map((icon, index) => (
                  <Col lg={4} sm={6} md={6} key={index}>
                    <div className='text-center'>
                      <img
                        className='skill-icon p-1'
                        width={'80px'}
                        src={icon}
                        alt=''
                      />
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col lg={6}>
              <img
                className='skills-main-image'
                width={'80%'}
                src={SkillsImage}
                alt='skills'
              />
            </Col>
          </Row>
        </Container>
      </SkillsContainer>
    </section>
  );
};

export default Skills;
