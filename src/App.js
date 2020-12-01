import React from 'react';
import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import ErrorScreen from './screens/ErrorScreen';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path={'/login'} exact component={LoginScreen} />
          <Route path='/welcome/:name' component={WelcomeScreen} />
          <Route component={ErrorScreen} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
