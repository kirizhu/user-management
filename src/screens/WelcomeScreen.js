import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import UserList from '../components/UserList';

function WelcomeScreen({ match: { params } }) {
  return (
    <div className='container'>
      <Navbar className='justify-content-between' bg='dark' variant='dark'>
        <Navbar.Brand href='#home'>User Management</Navbar.Brand>
        <Navbar.Text>Welcome {params.name}!</Navbar.Text>
      </Navbar>
      <UserList />
    </div>
  );
}

export default WelcomeScreen;
