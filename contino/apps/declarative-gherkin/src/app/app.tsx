import React from 'react';

import styles from './app.module.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {
  AdminLanding,
  Header,
  Introduction,
  Login,
  PrivateRoute,
  ProviderAuth,
  UserLanding,
  SideNav,
  ProviderDB,
} from '@contino/ui';

export function App() {
  return (
    <div className={styles.app}>
      <Router>
        <ProviderDB>
          <ProviderAuth>
            <Header />
            <main className={styles.mainFrame}>
              <SideNav />
              <Switch>
                <Route path="/" exact>
                  <Introduction />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <PrivateRoute path="/user" allowedUserName="*">
                  <UserLanding />
                </PrivateRoute>
                <PrivateRoute path="/admin" allowedUserName="admin">
                  <AdminLanding />
                </PrivateRoute>
              </Switch>
            </main>
          </ProviderAuth>
        </ProviderDB>
      </Router>
    </div>
  );
}

export default App;
