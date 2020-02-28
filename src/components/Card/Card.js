import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import './Card.scss';
function Card(props) {
  const dates = props.dates
    .map(date => moment(date).format('MMMM Do'))
    .join(', ');

  return (
    <div className="card-body">
      {props.title && <h2 className="card-title">{props.title}</h2>}
      {props.dates.length > 0 && (
        <div className="card-info">
          <span className="card-info-header">
            {`Date${props.dates.length > 0 ? 's' : null}:`}{' '}
          </span>
          <span className="card-info-text">{dates}</span>
        </div>
      )}
      {props.location && (
        <div className="card-info">
          <span className="card-info-header">Location: </span>
          <span className="card-info-text">{props.location}</span>
        </div>
      )}
      {props.price && (
        <div className="card-info">
          <span className="card-info-header">Price: </span>
          <span className="card-info-text">{props.price}</span>
        </div>
      )}
      {props.description && (
        <div className="card-info-description">
          <p>{props.description}</p>
        </div>
      )}
      <div className="align-center">
        <button
          className="button button__large animated-button card-button"
          onClick={props.onSignUpClicked}
        >
          Sign up!
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  dates: PropTypes.arrayOf(PropTypes.string),
  price: PropTypes.string,
  onSignUpClicked: PropTypes.func.isRequired
};
export default Card;
