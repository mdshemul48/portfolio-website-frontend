import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { CgHomeAlt } from 'react-icons/cg';
import { BiRocket } from 'react-icons/bi';
import { HiOutlineDocumentText } from 'react-icons/hi';
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
                <CgHomeAlt /> Home
              </NavLink>
              <NavLink className={'me-4 px-3'} as={Link} to='/projects'>
                <BiRocket /> Projects
              </NavLink>
              <NavLink className={'me-4 px-3'} as={Link} to='/blogs'>
                <HiOutlineDocumentText /> Blogs
              </NavLink>
              <NavLink className={'px-3'} as={Link} to='/about-us'>
                About Me
              </NavLink>
            </div>
          </Nav>
          <Nav.Link as={Link} to='#'>
            <Button className='px-3 login-button' variant='outline-dark'>
              Log In
            </Button>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
