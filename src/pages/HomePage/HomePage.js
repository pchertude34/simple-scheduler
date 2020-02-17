import React, { useState, useEffect } from 'react';

import { loadPhotoShoots } from '../../utils/apiUtils';

import Card from '../../components/Card/Card';

function HomePage(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [photoShoots, setPhotoShoots] = useState([]);

  // Load all of the upcoming photo shoots
  useEffect(() => {
    let isMounted = true;

    loadPhotoShoots()
      .then(response => {
        if (isMounted) {
          setPhotoShoots(response);
          setIsLoading(false);
          setError(false);
        }
      })
      .catch(error => {
        if (isMounted) {
          setError(error);
          setIsLoading(false);
        }
      });

    return () => (isMounted = false);
  }, []);

  const handleViewPhotoSignupClicked = sessionId => {
    // Route to the selected session
    props.history.push(sessionId);
  };

  const photoShootCards = photoShoots.map(photoShoot => {
    const { title, slug, dates, location, price, description } = photoShoot;
    return (
      <Card
        key={slug}
        title={title}
        dates={dates}
        location={location}
        price={price}
        description={description}
        onSignUpClicked={() => handleViewPhotoSignupClicked(slug)}
      />
    );
  });

  return (
    <React.Fragment>
      <div className="page-header">
        <h1 className="page-title">Upcoming photo shoots</h1>
      </div>
      {photoShootCards.length > 0 && photoShootCards}
    </React.Fragment>
  );
}

export default HomePage;
