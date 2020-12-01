import React from 'react';

function WelcomeScreen({ match: { params } }) {
  return (
    <div>
      <p>Welcome to the user management page {params.name}!</p>
    </div>
  );
}

export default WelcomeScreen;
