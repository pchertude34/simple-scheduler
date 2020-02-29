import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import './SignUpTable.scss';

function SignUpTable(props) {
  return (
    <div className="sign-up-table-wrapper">
      <p className="table-title">
        {moment(props.date).format('MMMM Do, YYYY')}
      </p>
      <div className="sign-up-table">
        {props.sessions.map(session => (
          <div
            className="sign-up-table-item"
            key={`session-time-${session.date}`}
          >
            <p className="sign-up-table-item__title">
              {moment(session.date).format('H:mm A')}
            </p>
            {session.available ? (
              <button className="button animated-button sign-up-table-item__button">
                Sign up
              </button>
            ) : (
              <div className="sign-up-table-item__name">
                <div className="initials">
                  <div className="initials__inner">
                    {session.firstName[0]}
                    {session.lastName[0]}
                  </div>
                </div>
                <p className="sign-up-table-item__name--text">
                  {session.firstName} {session.lastName}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

SignUpTable.propTypes = {
  date: PropTypes.string.isRequired,
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      available: PropTypes.bool,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      date: PropTypes.string
    }).isRequired
  )
};
export default SignUpTable;
