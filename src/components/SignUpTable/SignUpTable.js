import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import './SignUpTable.scss';

function SignUpTable(props) {
  console.log('props', props);

  props.sessions.map(session => {
    console.log(moment(session.time).format('MMM Do, YYYY'));
  });
  return (
    <div className="sign-up-table-wrapper">
      <p className="table-title">Date: febuaray 19th, 2020</p>
      <div className="sign-up-table">
        <div className="sign-up-table-item">
          <p className="sign-up-table-item__title">11:00 am</p>
          <button className="sign-up-table-item__button">Sign up</button>
        </div>
        <div className="sign-up-table-item">
          <p className="sign-up-table-item__title">11:00 am</p>
          <button className="sign-up-table-item__button">Sign up</button>
        </div>
      </div>
    </div>
  );
}

SignUpTable.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      available: PropTypes.bool,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      time: PropTypes.string
    })
  )
};
export default SignUpTable;
