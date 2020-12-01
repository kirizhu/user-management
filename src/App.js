import React from 'react';
import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Route path={'/' || '/login'} component={LoginScreen} />
        <Route path='/welcome' component={WelcomeScreen} />
      </Router>
    </div>
  );
}

export default App;
