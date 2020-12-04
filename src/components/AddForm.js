import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import users from '../api/users';

function AddForm({ match }) {
  const history = useHistory();
  const id = match.params.id;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const getUser = async () => {
    try {
      const response = await users.get(`/users/${id}`);
      let user = response.data;
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setEmail(user.email);
    } catch (err) {
      setErrMsg('Something went wrong');
    }
  };
  useEffect(() => {
    if (id == -1) {
      return;
    } else {
      getUser();
    }
  }, []);

  const saveUser = async () => {
    if (id == -1) {
      try {
        await users.post('/users', {
          firstName,
          lastName,
          email,
        });
      } catch (err) {
        setErrMsg('Something went wrong');
      }
    } else {
      try {
        await users.put(`/users/${id}`, {
          firstName,
          lastName,
          email,
        });
      } catch (err) {
        setErrMsg('Something went wrong');
      }
    }
    history.push('/welcome');
  };
  return (
    <div className='container border border-dark'>
      {errMsg ? <p>{errMsg}</p> : null}
      <Form className='m-5'>
        <Form.Group>
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            type='name'
            placeholder='Enter first name'
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            type='name'
            placeholder='Enter last name'
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Username/email</Form.Label>
          <Form.Control
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type='email'
            placeholder='Enter email'
          />
        </Form.Group>
        <div>
          <Button onClick={() => saveUser()} variant='success'>
            Save
          </Button>{' '}
          <Button onClick={() => history.push('/welcome')} variant='danger'>
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AddForm;
