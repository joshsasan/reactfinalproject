import React, { useState } from 'react';
import './GuitarList.css'; 

const GuitarList = () => {
  // Sample list of guitars
  const electricGuitars = [
    { id: 1, name: 'Fender Stratocaster', brand: 'Fender', year: 1954 },
    { id: 2, name: 'Gibson Les Paul', brand: 'Gibson', year: 1952 },
    { id: 3, name: 'PRS Custom 24', brand: 'PRS', year: 1985 }
  ];

  const acousticGuitars = [
    { id: 4, name: 'Martin D-28', brand: 'Martin', year: 1931 },
    { id: 5, name: 'Taylor 814ce', brand: 'Taylor', year: 1994 }
  ];

  // State to hold the boolean value for toggle
  const [showElectric, setShowElectric] = useState(true);

  // Function to toggle between electric and acoustic guitars
  const toggleGuitarType = () => {
    setShowElectric(!showElectric);
  };

  // Determine which list of guitars to display based on the boolean value
  const guitarsToShow = showElectric ? electricGuitars : acousticGuitars;

  return (
    <div className="container">
      {/* Button to toggle between electric and acoustic guitars */}
      <button className="button" onClick={toggleGuitarType}>
        {showElectric ? 'Show Acoustic Guitars' : 'Show Electric Guitars'}
      </button>

      {/* Conditional rendering based on the boolean value */}
      {guitarsToShow && (
        <ul className="list">
          {/* Mapping through the list of guitars */}
          {guitarsToShow.map(guitar => (
            <li key={guitar.id} className="list-item">
              <div className="guitar-item">
                <h3>{guitar.name}</h3>
                <p><strong>Brand:</strong> {guitar.brand}</p>
                <p><strong>Year:</strong> {guitar.year}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GuitarList;
