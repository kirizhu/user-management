import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import users from '../api/users';

function User({ match }) {
  const id = match.params.id;
  const [errMsg, setErrMsg] = useState('');
  const [user, setUser] = useState('');

  const getUser = async () => {
    try {
      const response = await users.get(`/users/${id}`);
      setUser(response.data);
    } catch (err) {
      setErrMsg('Something went wrong');
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className='centered'>
      <Card>
        <Card.Body>
          <Card.Title>User profile</Card.Title>
          <Card.Text>First name: {user.firstName}</Card.Text>
          <Card.Text>Last name: {user.lastName}</Card.Text>
          <Card.Text>Email: {user.email}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default User;
