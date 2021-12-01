import React, { useEffect } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { useForm } from '@formspree/react';

import ContantMeImage from '../../../assets/contact-me.png';

const ContentMeFormContainer = styled.div`
  background-color: #e1e2fd;
  margin-top: 0.6rem;
`;

const ContactMeContainer = styled.div`
  & > h1 {
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  & p {
    text-align: center;
    line-height: 0.8rem;
    font-weight: 300;
    color: #868e96;
  }

  & .content-details h5 {
    text-align: right;
    font-weight: 600;
  }
`;

const ContactMe = () => {
  const [state, formSubmit] = useForm('mnqwabja');
  useEffect(() => {
    if (state.succeeded) {
      return alert('Thanks for reaching out. I will get back to you shortly.');
    }
  }, [state.succeeded]);

  return (
    <ContactMeContainer className='my-5'>
      <h1>Contact Me</h1>
      <p>Want to get in touch? I'd love to hear from you.</p>
      <p>Here's how you can reach me...</p>
      <ContentMeFormContainer>
        <Container>
          <Row>
            <Col lg={6} className='mt-5'>
              <img
                src={ContantMeImage}
                alt='contact me form'
                className='mt-5'
                width={'80%'}
              />
            </Col>
            <Col lg={6} className='d-flex align-items-center'>
              <Form className='mt-5 w-100' onSubmit={formSubmit}>
                <Form.Group className='content-details'>
                  <h5>Dhaka, Bangladesh.</h5>
                  <h5>Phone: +88-(0)-1965619040</h5>
                  <h5>Email: mdshemul480@gmail.com</h5>
                </Form.Group>
                <Form.Group
                  className='mb-4'
                  controlId='exampleForm.ControlInput1'
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Your Name'
                    name='name'
                  />
                </Form.Group>
                <Form.Group
                  className='mb-4'
                  controlId='exampleForm.ControlInput1'
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='name@example.com'
                    name='email'
                  />
                </Form.Group>
                <Form.Group
                  className='mb-4'
                  controlId='exampleForm.ControlTextarea1'
                >
                  <Form.Label>Message</Form.Label>
                  <Form.Control as='textarea' name='message' rows={3} />
                </Form.Group>
                <Form.Group
                  className='mb-4'
                  controlId='exampleForm.ControlTextarea1'
                >
                  <Button variant='dark' type='submit'>
                    Submit
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </ContentMeFormContainer>
    </ContactMeContainer>
  );
};

export default ContactMe;
