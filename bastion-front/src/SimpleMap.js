import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import LocationPopup from './LocationPopup';

const containerStyle = {
  width: '850px',
  height: '850px',
  margin: "auto"
};

const center = {
  lat: 31.504820, lng: -7.926555
};

function SimpleMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCCXRo0y1Q1gwIv-VU52rBf29xnjp_rsaM"
  })

const markers = [
    { name: "Location 1", "Lat": 31.6602, "Long": -8.0182, "Color": "red" },
    { name: "Location 2", "Lat": 31.7100, "Long": -7.9100, "Color": "green" },
    { name: "Location 3", "Lat": 31.5050, "Long": -7.9600, "Color": "orange" },
    { name: "Location 4", "Lat": 31.4000, "Long": -8.0000, "Color": "red" },
    { name: "Location 5", "Lat": 31.7500, "Long": -8.0500, "Color": "green" },
    { name: "Location 6", "Lat": 31.5500, "Long": -7.9200, "Color": "orange" },
    { name: "Location 7", "Lat": 31.7200, "Long": -8.0100, "Color": "red" },
    { name: "Location 8", "Lat": 31.5200, "Long": -7.8700, "Color": "green" },
    { name: "Location 9", "Lat": 31.6100, "Long": -8.0800, "Color": "orange" },
    { name: "Location 10", "Lat": 31.4300, "Long": -7.9300, "Color": "red" },
    { name: "Location 11", "Lat": 31.5600, "Long": -8.0600, "Color": "green" },
    { name: "Location 12", "Lat": 31.4900, "Long": -7.9500, "Color": "orange" },
    { name: "Location 13", "Lat": 31.4500, "Long": -7.9900, "Color": "red" },
    { name: "Location 14", "Lat": 31.7000, "Long": -7.8600, "Color": "green" },
    { name: "Location 15", "Lat": 31.6700, "Long": -8.0900, "Color": "orange" },
    { name: "Location 16", "Lat": 31.4800, "Long": -7.9700, "Color": "red" },
    { name: "Location 17", "Lat": 31.5400, "Long": -8.0200, "Color": "green" },
    { name: "Location 18", "Lat": 31.6900, "Long": -7.9400, "Color": "orange" },
    { name: "Location 19", "Lat": 31.5300, "Long": -7.8900, "Color": "red" },
    { name: "Location 20", "Lat": 31.7400, "Long": -8.0400, "Color": "green" },
    { name: "Location 21", "Lat": 31.4600, "Long": -7.9100, "Color": "orange" },
    { name: "Location 22", "Lat": 31.5800, "Long": -8.0500, "Color": "red" },
    { name: "Location 23", "Lat": 31.4200, "Long": -7.9800, "Color": "green" },
    { name: "Location 24", "Lat": 31.7100, "Long": -8.0300, "Color": "orange" },
    { name: "Location 25", "Lat": 31.6400, "Long": -7.9600, "Color": "red" },
    { name: "Location 26", "Lat": 31.5100, "Long": -8.0100, "Color": "green" },
    { name: "Location 27", "Lat": 31.7300, "Long": -7.8800, "Color": "orange" },
    { name: "Location 28", "Lat": 31.4700, "Long": -7.9600, "Color": "red" },
    { name: "Location 29", "Lat": 31.6500, "Long": -8.0700, "Color": "green" },
    { name: "Location 30", "Lat": 31.4100, "Long": -7.9400, "Color": "orange" }
  ]

  const [map, setMap] = React.useState(null)
  const [currentMarker, setCurrentMarker] = React.useState(null)

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const [showPopup, setShowPopup] = React.useState(false);

  return isLoaded ? (
      <>
        <LocationPopup
          name={currentMarker ? currentMarker.name : ""}
          lat={currentMarker ? currentMarker.Lat : ""}
          lang={currentMarker ? currentMarker.Long : ""}
          show={showPopup}
        />
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onUnmount={onUnmount}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <>
          {markers.map((marker, i) => {
            var iconPin = {
              path: 'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z',
              fillColor: marker.Color,
              fillOpacity: 1,
              scale: 0.05, //to reduce the size of icons
            };

            return <Marker 
              key={i}
              position={{lat: marker.Lat, lng: marker.Long}} 
              icon={iconPin}
              onClick={() => { setShowPopup(!showPopup); setCurrentMarker(marker)}}
            />
          }
          )}
          </>
        </GoogleMap>
      </>
  ) : <></>
}

export default React.memo(SimpleMap)