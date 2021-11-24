import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

import './NavLink.css';
const NavLink = ({ children, to, className, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  console.log(match);
  return (
    <Nav.Link
      as={Link}
      className={`${className} ${match ? 'active' : ''}`}
      to={to}
      {...props}
    >
      {children}
    </Nav.Link>
  );
};

export default NavLink;
