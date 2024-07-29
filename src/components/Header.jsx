import React, { useEffect, useState } from 'react';

export default function Header() {
  const [headerImage, setHeaderImage] = useState('');

  useEffect(() => {
    fetch('/animals.json')
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setHeaderImage(data[0].imageUrl);
        }
      })
      .catch((error) => console.error('Error fetching animals data:', error));
  }, []);

  return (
    <header>
      {headerImage ? (
        <img src={headerImage} alt="Animal Header" />
      ) : (
        <p>Loading image...</p>
      )}
      <h1>Welcome to the Animal Shelter</h1>
    </header>
  );
}
