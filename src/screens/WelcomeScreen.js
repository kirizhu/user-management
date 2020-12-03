import React from 'react';
import Header from '../components/Header';
import UserList from '../components/UserList';
import Footer from '../components/Footer';

function WelcomeScreen() {
  return (
    <div className='container'>
      <Header />
      <UserList />
      <Footer />
    </div>
  );
}

export default WelcomeScreen;
