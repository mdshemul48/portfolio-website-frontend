import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import NavLink from './NavLink/NavLink';

import './NavBar.css';
const NavBar = () => {
  return (
    <Navbar expand='lg' className='shadow-sm'>
      <Container>
        <Navbar.Brand href='#'>Navbar scroll</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className='mx-auto  my-lg-0'>
            <div className='nav-links d-flex my-auto mx-2'>
              <NavLink className={'me-4 px-3'} as={Link} to='/'>
                Home
              </NavLink>
              <NavLink className={'me-4 px-3'} as={Link} to='/projects'>
                Projects
              </NavLink>
              <NavLink className={'me-4 px-3'} as={Link} to='/blogs'>
                Blogs
              </NavLink>
              <NavLink className={'px-3'} as={Link} to='/about-us'>
                About Me
              </NavLink>
            </div>
          </Nav>
          <Nav.Link as={Link} to='#'>
            MD. Shimul
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
