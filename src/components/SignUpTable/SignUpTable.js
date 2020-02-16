import React from 'react';
import './SignUpTable.scss';
function SignUpTable() {
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

export default SignUpTable;
