import React from 'react';
import Header from '../components/Header';
import User from '../components/User';
function UserScreen({ match }) {
  return (
    <div className='container'>
      <Header />
      <User match={match} />
    </div>
  );
}

export default UserScreen;
