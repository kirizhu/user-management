import React from 'react';
import Header from '../components/Header';
import AddForm from '../components/AddForm';

function AddScreen({ match }) {
  return (
    <div className='container'>
      <Header />
      <AddForm match={match} />
    </div>
  );
}

export default AddScreen;
