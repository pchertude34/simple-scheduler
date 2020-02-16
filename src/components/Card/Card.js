import React from 'react';
import PropTypes from 'prop-types';

import './Card.scss';
function Card(props) {
  return (
    <div className="card-body">
      {props.title && <h2 className="card-title">{props.title}</h2>}
      {props.date && (
        <div className="card-info">
          <span className="card-info-header">Date: </span>
          <span className="card-info-text">{props.date}</span>
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
        <button className="button button__large animated-button card-button">
          Sign up!
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  date: PropTypes.string,
  price: PropTypes.string
};
export default Card;
