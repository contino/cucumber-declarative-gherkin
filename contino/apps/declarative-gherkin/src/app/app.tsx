import React from 'react';

import styles from './app.module.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import { AdminLanding, AuthButton, Header, Introduction, Login, PrivateRoute, ProviderAuth, UserLanding } from '@contino/ui';

export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <ProviderAuth>
          <Router>
            <AuthButton />

            <Switch>
              <Route path="/" exact>
                <Introduction />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <PrivateRoute path="/user">
                <UserLanding />
              </PrivateRoute>
              <PrivateRoute path="/admin">
                <AdminLanding />
              </PrivateRoute>
            </Switch>
          </Router>
        </ProviderAuth>
     </main>
   </div>
  );
}

export default App;
