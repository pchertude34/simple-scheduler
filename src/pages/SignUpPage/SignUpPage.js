import React, { useEffect, useState, useReducer } from 'react';
import { loadSessionSignUp, signUpForSession } from '../../utils/apiUtils';
import moment from 'moment';

import PageInfo from '../../components/PageInfo/PageInfo';
import SignUpTable from '../../components/SignUpTable/SignUpTable';
import Modal from '../../components/Modal/Modal';

import './SignUpPage.scss';

function SignUpPage(props) {
  const [details, setDetails] = useState({});
  const [sessions, setSessions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState({});
  // Form state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const sessionId = props.match.params.sessionId;

  /**
   * Load the specific session details.
   */
  useEffect(() => {
    let isMounted = true;

    loadSessionSignUp(sessionId).then(sessionData => {
      if (isMounted) {
        setSessions(sessionData.sessions);
        setDetails(sessionData.details);
      }
    });

    return () => (isMounted = false);
  }, [sessionId]);

  /**
   * Handle phone number form field change
   * @param {object} event onChange event
   */
  const handleSetPhoneNumber = event => {
    // Make sure the phone number is actually a number
    if (!isNaN(event.target.value)) setPhoneNumber(event.target.value);
  };

  /**
   * Handler for clicking the 'Sign Up' button in the sign up table.
   * @param {object} timeSlot The time slot that the user is signing up for.
   */
  const handleSignUpClicked = timeSlot => {
    setIsModalOpen(true);
    setSelectedTimeSlot(timeSlot);
  };

  /**
   * Handler for the user submitting the sign up form in the modal.
   * @param {object} event form sumbit event.
   */
  const handleSignUpFormSumbit = event => {
    event.preventDefault();

    const attendeeInfo = {
      firstName,
      lastName,
      email,
      phoneNumber,
      date: selectedTimeSlot.date
    };

    signUpForSession(sessionId, attendeeInfo);
  };

  // Format the sessions so we can make the table groups and rows
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
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Header>{details.title}</Modal.Header>
        <Modal.Body>
          <h3 className="text-center mb-sm">
            {moment(selectedTimeSlot.date).format('MMMM Do, YYYY h:mm A')}
          </h3>
          <form onSubmit={handleSignUpFormSumbit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                id="firstName"
                type="text"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                id="lastName"
                type="text"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                id="phoneNumber"
                type="tel"
                value={phoneNumber}
                onChange={handleSetPhoneNumber}
                required
              />
            </div>

            <div className="button-group">
              <button
                type="submit"
                className="button animated-button signup-button"
              >
                Sign Up!
              </button>
              <button
                type="cancel"
                className="text-button"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>

      <div className="page-header">
        <h1 className="page-title">Sign Up</h1>
      </div>
      <PageInfo header={details.title} description={details.description} />

      {Object.keys(formattedSessions).map(sessionDate => (
        <SignUpTable
          date={sessionDate}
          sessions={formattedSessions[sessionDate]}
          onSignUpClicked={handleSignUpClicked}
          key={`session-${sessionDate}`}
        />
      ))}
    </React.Fragment>
  );
}

export default SignUpPage;
