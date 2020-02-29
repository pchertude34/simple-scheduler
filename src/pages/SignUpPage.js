import React, { useEffect, useState } from 'react';
import { loadSessionSignUp } from '../utils/apiUtils';
import moment from 'moment';

import SignUpTable from '../components/SignUpTable/SignUpTable';

function SignUpPage(props) {
  const [sessions, setSessions] = useState([]);
  const sessionId = props.match.params.sessionId;

  useEffect(() => {
    let isMounted = true;

    loadSessionSignUp(sessionId).then(sessionData => {
      if (isMounted) {
        setSessions(sessionData.sessions);
      }
    });

    return () => (isMounted = false);
  }, [sessionId]);

  const formattedSessions = sessions.reduce((accum, session) => {
    // get the day of the session
    const day = moment(session.date).format('MM-DD-YYYY');
    // If there is already a session for the day, add the current session to it.
    if (accum[day]) accum[day].push(session);
    // If there is no session for the day, add the day to the object and the session.
    else accum[day] = [session];

    return accum;
  }, {});

  return (
    <React.Fragment>
      <div className="page-header">
        <h1 className="page-title">Sign Up</h1>
      </div>

      {Object.keys(formattedSessions).map(sessionDate => (
        <SignUpTable
          date={sessionDate}
          sessions={formattedSessions[sessionDate]}
          key={`session-${sessionDate}`}
        />
      ))}
    </React.Fragment>
  );
}

export default SignUpPage;
