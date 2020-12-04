import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useHistory } from 'react-router-dom';
function Header() {
  const history = useHistory();
  return (
    <Navbar className='justify-content-between' bg='dark' variant='dark'>
      <Navbar.Brand>User Management</Navbar.Brand>
      <Nav>
        <Nav.Link onClick={() => history.push('/welcome')}>User List</Nav.Link>
        <Nav.Link onClick={() => history.push('/add/-1')}>Add User</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
