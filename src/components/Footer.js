import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
function Footer(props) {
  return (
    <Navbar className='center' fixed='bottom' bg='dark' variant='dark'>
      <Navbar.Text>Copyright Eddy.G</Navbar.Text>
    </Navbar>
  );
}

export default Footer;
