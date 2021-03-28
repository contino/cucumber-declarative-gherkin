import { Divider, Link, List, ListItem, ListItemText, Paper } from '@material-ui/core';
import React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import './side-nav.module.scss';
import { useAuth } from '@contino/fake-security';

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
  pathname: string;
  pathPrefix: string;
}

function ListItemLink(props: ListItemLinkProps) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef<any, Omit<RouterLinkProps, 'to'>>((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to],
  );

  const isSelected = props.pathname !== undefined && props.pathname.startsWith(props.pathPrefix);

  return (
    <li>
      <ListItem button component={renderLink} selected={isSelected}>
        <ListItemText primary={primary}/>
      </ListItem>
    </li>
  );
}
/* eslint-disable-next-line */
export interface SideNavProps { }

const useStyles = makeStyles({
  root: {
    width: 140,
    justifyContent: 'flex-start'
  },
  hide: {
    display: 'none'
  },
});

export function SideNav(props: SideNavProps) {
  const classes = useStyles();
  const location = useLocation();

  let sideNav;
  if (location !== null && location.pathname.startsWith('/user')) {
    sideNav = <Paper elevation={3}> 
      <List aria-label="main mailbox folders"> 
        <ListItemLink to="/user/form" primary="Apply" pathname={location.pathname} pathPrefix="/user/form" /> 
        <ListItemLink to="/user/status" primary="Check status" pathname={location.pathname} pathPrefix="/user/status" /> 
      </List> 
    </Paper>;
  } 

  return location === null || location.pathname === '/' ? (
    <div className={classes.hide}></div>
  ) : (
    <div className={classes.root}>
      {sideNav}
    </div>
  );
}

export default SideNav;
