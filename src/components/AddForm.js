import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spacer from '../components/Spacer';
import { useHistory } from 'react-router-dom';

function AddForm() {
  const history = useHistory();
  return (
    <div className='container'>
      <h2 className='centered'>Add User</h2>
      <Form>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>First name</Form.Label>
          <Form.Control type='name' placeholder='Enter first name' />
        </Form.Group>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Last name</Form.Label>
          <Form.Control type='name' placeholder='Enter last name' />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Username/email</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
        </Form.Group>
        <div>
          <Button variant='success' type='submit'>
            Save
          </Button>{' '}
          <Button
            onClick={() => history.push('/welcome')}
            variant='danger'
            type='submit'
          >
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AddForm;
