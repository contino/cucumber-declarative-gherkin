import { Box, Link, Typography } from '@material-ui/core';
import React from 'react';
import {
  useHistory,
  Link as RouterLink
} from "react-router-dom";

import './introduction.module.scss';

/* eslint-disable-next-line */
export interface IntroductionProps { }

export function Introduction(props: IntroductionProps) {
  const history = useHistory();

  return (
    <div style={{ display: 'flex', flexGrow: 1 }}>
      <Box display="flex" flexDirection="column">
        <Typography id="title" variant="h4" style={{ display: 'flex', justifyContent: 'center' }} >
          Welcome to the Declarative Gherkin Demo!
        </Typography>
        <Typography id="warning-msg" variant="h6" style={{ display: 'flex' }}>
          WARNING: This app is a work in progress!  The only working piece is 
          the credit application submission process and it is not fully complete.  
          The other pieces are not implemented yet.  This was released early to
          aide declarative Gherkin training and eduction.
        </Typography>
        <Typography variant="body1">
          This is a demostraion of how to implement declarative Gherkin using a simpale web-based
          credit card application form.  Several declarative Gherkin examples use simplistic examples,
          which fail for more complex situations.  Thus, this example has a good amount of data and
          pages, which create complex behaviors.  Even with these complexities, the declarative
          Gherkin remain concise and easy to understand.  Let's look at how this web-based system
          works.
        </Typography>
        <Typography id="application-title" variant="h5" style={{ display: 'flex' }}>
          New Credit Card Submissions Applciation
        </Typography>
        <Typography variant="body1">
          This web-based application allows users to submit request for
          a new credit card and see the status of their submission.  Only one
          submission per user.  There is an admin function in the system.
          They can only view and delete submissions.
        </Typography>
        <Typography variant="body1">
          Users will submit their new credit card request using a multiple page
          form.  On the final page, the user can cancel, save for later or submit.
          On save for later, the user can come back to the form with their data
          populated from the saved data.  On submission, the user will get feedback
          if they passed the first screening or not.  In addition, there are failure
          states, which are covered in the Cucumber tests.
        </Typography>
        <Typography variant="body1">
          The admin home page is a list of submisisons.  They can view sumbission details
          or delete one or many submissions.
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
          For admin, the username is "admin" with the password "GhekinIsFun".
          <Link component={RouterLink} to="/admin"
            style={{ display: 'flex' }}>
            Go to Admin Homepage
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
