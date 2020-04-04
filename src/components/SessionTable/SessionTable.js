import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import './SessionTable.scss';

function SessionTable(props) {
  const { sessions } = props;

  return (
    <table className="session-table">
      <thead className="session-table-header">
        <tr>
          <th>Session Name</th>
          <th>Available Slots</th>
          <th>Dates</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody className="session-table-body">
        {(Object.keys(sessions) || []).map(sessionId => (
          <tr key={`session-item-${sessionId}`}>
            <td>{sessions[sessionId].title}</td>
            <td>{sessions[sessionId].available}</td>
            <td>
              {sessions[sessionId].dates.map(date => (
                <span className="session-date">{moment(date).format('MMMM Do, YYYY')}</span>
              ))}
            </td>
            <td>{sessions[sessionId].location}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

SessionTable.propTypes = {
  sessions: PropTypes.any
};

export default SessionTable;
