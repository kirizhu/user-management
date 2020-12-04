import React from 'react';
import Header from '../components/Header';
import UserList from '../components/UserList';

function WelcomeScreen() {
  return (
    <div className='container'>
      <Header />
      <UserList />
    </div>
  );
}

export default WelcomeScreen;
