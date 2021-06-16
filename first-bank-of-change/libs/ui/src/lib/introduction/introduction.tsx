import { Box, Link, Typography } from '@material-ui/core';
import React from 'react';
import {
  useHistory,
  Link as RouterLink
} from "react-router-dom";

import './introduction.module.scss';

/* eslint-disable-next-line */
export interface IntroductionProps { }

// This is the first page to introduce people to the demo, so 
// they get the most out of it.
export function Introduction(props: IntroductionProps) {
  const history = useHistory();

  return (
    <div style={{ display: 'flex', flexGrow: 1 }}>
      <Box display="flex" flexDirection="column">
        <Typography id="title" variant="h4" style={{ display: 'flex', justifyContent: 'center' }} >
          Welcome to the Declarative Gherkin Demo!
        </Typography>
        <Typography variant="body1">
          This is a demostraion of how to implement declarative Gherkin using a simpale web-based
          credit card application form.  Several declarative Gherkin examples use simplistic examples,
          which fail for more complex situations.  Thus, this example has a good amount of data and
          pages, which creates a complex set of behaviors.  Even with these complexities, the declarative
          Gherkin remain concise and easy to understand.  Let's look at how this web-based system
          works.
        </Typography>
        <Typography id="application-title" variant="h5" style={{ display: 'flex' }}>
          New Credit Card Submissions Applciation
        </Typography>
        <Typography variant="body1">
          This web-based application allows users to submit request for
          a new credit card and see the status of their submission. 
          Users will submit their new credit card request using a multiple page
          form.  On the final page the user submits their form.
          On submission, the user will get feedback
          if they passed the first screening or not.  In addition, there are failure
          states, which are covered in the Cucumber tests.
        </Typography>
        <Typography id="using-app-title" variant="h5" style={{ display: 'flex' }}>
          Using the App
        </Typography>
        <Typography variant="body1">
          To login as a user, use any username, except "admin" with the password "GhekinIsFun".
          <Link component={RouterLink} to="/user"
            style={{ display: 'flex' }}>
            Go to User Homepage
          </Link>
        </Typography>
        <Typography variant="h5" style={{ display: 'flex' }}>
          Critical Pieces to Support Declarative Gherkin
        </Typography>
        <Typography variant="body1">
          Declarative Gherkin is hard to write when compared to imperative
          Gherkin, but is easier to manage in the long-term.  For successful
          adoption of declarative Gherkin, it requires three technical items:
        </Typography>
        <ul>
          <li>Centralized Data Managaement</li>
          <li>Industry/Corporate Terms Wiki</li>
          <li>Cucumber Logging</li>
        </ul>
        Please read "docs/declarative-gherkin.md" for more details.
      </Box>
    </div>
  );
}

export default Introduction;
