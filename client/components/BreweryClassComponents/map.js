import React from 'react'
import { withScriptjs, GoogleMap, Marker, withGoogleMap } from 'react-google-maps'
import { MarkerClusterer } from 'react-google-maps/lib/components/addons/MarkerClusterer'

const Dummy = withScriptjs(
  withGoogleMap((props) => {

    return (
      <GoogleMap
        defaultZoom={4}
        defaultCenter={{ lat: props.markers[0].latitude, lng: props.markers[0].longitude }}
      >
        <MarkerClusterer
          onClick={props.onMarkerClustererClick}
          averageCenter
          enableRetinaIcons
          gridSize={60}
        >
          {props.isMarkerShown &&
            props.markers.map((marker) => (
              <Marker key={marker.id} position={{ lat: marker.latitude, lng: marker.longitude }} />
            ))}
        </MarkerClusterer>
      </GoogleMap>
    )
  })
)

Dummy.propTypes = {}

export default React.memo(Dummy)
