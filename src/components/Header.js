import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { useHistory } from 'react-router-dom';
function Header() {
  const history = useHistory();
  return (
    <Navbar className='justify-content-between' bg='dark' variant='dark'>
      <Navbar.Brand>User Management</Navbar.Brand>
      <Navbar.Text onClick={() => history.push('/welcome')}>
        User List
      </Navbar.Text>
      <Navbar.Text onClick={() => history.push('/add')}>Add User</Navbar.Text>
    </Navbar>
  );
}

export default Header;
