import React, { useState, useEffect } from 'react';

import { loadPhotoShoots } from '../../utils/apiUtils';

import Card from '../../components/Card/Card';

function HomePage() {
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

  const photoShootCards = photoShoots.map(photoShoot => {
    const { title } = photoShoot;
    return (
      <Card
        title={title}
        date="9/11"
        location="Some wehere cool"
        price="Free!"
        description={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }
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
