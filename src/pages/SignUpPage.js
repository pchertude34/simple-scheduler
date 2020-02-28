import React, { useEffect, useState } from 'react';
import { loadSessionSignUp } from '../utils/apiUtils';

import SignUpTable from '../components/SignUpTable/SignUpTable';

function SignUpPage(props) {
  const [sessions, setSessions] = useState({});
  const sessionId = props.match.params.sessionId;

  useEffect(() => {
    let isMounted = true;

    loadSessionSignUp(sessionId).then(doc => {
      if (isMounted) {
        setSessions(doc['time-slots']);
      }
    });

    return () => (isMounted = false);
  }, [sessionId]);

  const formattedSessions =
    sessions &&
    Object.keys(sessions).reduce((accum, sessionDate) => {
      const sessionData = [];
      for (let sessionTime in sessions[sessionDate]) {
        sessionData.push({
          time: `${sessionDate} ${sessionTime}`,
          ...sessions[sessionDate][sessionTime]
        });
      }

      return accum.concat(sessionData);
    }, []);

  return (
    <React.Fragment>
      <div className="page-header">
        <h1 className="page-title">Sign Up</h1>
      </div>
      <SignUpTable sessions={formattedSessions} />
    </React.Fragment>
  );
}

export default SignUpPage;
