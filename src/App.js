import React from 'react';
import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import ErrorScreen from './screens/ErrorScreen';
import AddScreen from './screens/AddScreen';
import UserScreen from './screens/UserScreen';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path={'/'} exact component={LoginScreen} />
          <Route path={'/welcome'} component={WelcomeScreen} />
          <Route path={'/add/:id'} component={AddScreen} />
          <Route path={'/user/:id'} component={UserScreen} />
          <Route component={ErrorScreen} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
