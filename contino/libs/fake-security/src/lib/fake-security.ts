// Code here is based on code from: https://reactrouter.com/web/example/auth-workflow

import { useContext, createContext, useState } from "react";

export const authContext = createContext(null);

const fakeAuth = {
  isAuthenticated: false,
  signin(username: String, password: String, successCb, failCb) {
    if (username === null || username === undefined || password === null ||
       password === undefined ||
       password !== "DeclarativeGherkinIsFamilyFun!") {
      fakeAuth.isAuthenticated = false;
      setTimeout(failCb, 100, 'Failed login attempt.'); // fake async
      return
    }

    fakeAuth.isAuthenticated = true;
    setTimeout(successCb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

export function useAuth() {
  return useContext(authContext);
}

export function useProvideAuth() {
  const [user, setUser] = useState("a");
  const [password, setPassword] = useState(null);

  const signin = (username, password, successCb, failCb) => {
    return fakeAuth.signin(username, password,
      () => {
        setUser(username);
        successCb();
      },
      (failMsg) => {
        setUser(null);
        failCb(failMsg);
      });
  };

  const signout = cb => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signin,
    signout
  };
}
export function fakeSecurity(): string {
  return 'fake-security';
}