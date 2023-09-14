import React from 'react';

const LocationPopup = ({ name, lat, lang, show }) => {
  const popupStyle = {
    display: show ? 'block' : 'none'
  };

  return (
    <div className="location-popup" style={popupStyle}>
      <h3>Name: {name}</h3>
      <p>Lat: {lat}</p>
      <p>Lang: {lang}</p>
    </div>
  );
};

export default LocationPopup;