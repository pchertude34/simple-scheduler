import React, { useState, useEffect } from 'react';
import { loadAllPhotoShootsAndDetails } from '../../utils/apiUtils';

import SessionTable from '../../components/SessionTable/SessionTable';

function AdminHome() {
  const [sessions, setSessions] = useState({});

  useEffect(() => {
    let isMounted = true;

    loadAllPhotoShootsAndDetails().then(data => {
      if (isMounted) {
        setSessions(data);
      }
    });

    return () => (isMounted = false);
  }, []);

  return (
    <React.Fragment>
      <div className="page-header">
        <h1 className="page-title">Manage Sessions</h1>
      </div>
      <SessionTable sessions={sessions} />
    </React.Fragment>
  );
}

export default AdminHome;
