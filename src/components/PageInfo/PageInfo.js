import React from 'react';
import PropTypes from 'prop-types';

import './PageInfo.scss';

function PageInfo(props) {
  return (
    <div className="page-info">
      <h2 className="page-info-header">{props.header}</h2>
      {props.description && (
        <p className="page-info-text">{props.description}</p>
      )}
    </div>
  );
}

PageInfo.propTypes = {
  header: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default PageInfo;
