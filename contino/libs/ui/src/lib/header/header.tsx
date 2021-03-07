import React from 'react';

import './header.module.scss';
import { ReactComponent as Logo } from './logo.svg';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <header className="flex">
      <Logo width="75" height="75" />
      <h1>First Change Bank</h1>
    </header>
);
}

export default Header;
