import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AddForm from '../components/AddForm';

function AddScreen({ history }) {
  return (
    <div>
      <div className='container'>
        <Header />
        <AddForm />
        <Footer />
      </div>
    </div>
  );
}

export default AddScreen;
