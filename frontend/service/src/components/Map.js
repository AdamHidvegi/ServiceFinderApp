import React,{ useState } from 'react'
import MapGL, {GeolocateControl } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

// source: https://blog.logrocket.com/how-to-use-mapbox-gl/

const TOKEN="pk.eyJ1IjoiajRzMG5iMHVybjMiLCJhIjoiY2tkM2g0OGhvMWV0dzJxcXY1cHFzdDkwNSJ9.vbjYCHPn1WpWldGgRGXycQ";

const geolocateStyle = {
  float: 'left',
  margin: '50px',
  padding: '10px'
};

const Map = () => {

  const [viewport, setViewPort ] = useState({
    width: "70%",
    height: 500,
    latitude: 50,
    longitude: 0,
    zoom: 2
  })

  const _onViewportChange = viewport => setViewPort({...viewport, transitionDuration: 15 })

  return (
    <div className="mapContainer">
      <h1>Location:</h1>
      <MapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v8"
        onViewportChange={_onViewportChange}
      >
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true}
        />
      </MapGL>
    </div>
  )
}

export default Map
