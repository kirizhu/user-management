import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import './styles/Login.css';

function LoginScreen({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    if (email !== 'Kiribaty' && password !== '123456') {
      setErrorMsg('You have entered the wrong credentials');
    } else {
      history.push(`/welcome/${email}`);
    }
  };

  return (
    <div className='centered'>
      <div style={{ margin: 10 }} />
      {errorMsg ? <p>{errorMsg}</p> : null}
      <div style={{ margin: 10 }} />
      <TextField
        required
        id='standard-required'
        label='Email'
        defaultValue='your@email.io'
        autoCapitalize='none'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div style={{ margin: 10 }} />
      <TextField
        required
        id='standard-required'
        label='Password'
        defaultValue='********'
        autoCapitalize='none'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div style={{ margin: 10 }} />
      <Button variant='contained' onClick={(e) => onSubmit(e)}>
        Sign in
      </Button>
    </div>
  );
}

export default LoginScreen;
