import React from 'react'
import { withScriptjs, GoogleMap, Marker, withGoogleMap } from 'react-google-maps'

const Dummy = withScriptjs(withGoogleMap((props) => {
  return (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
    </GoogleMap>
  )
})

)

Dummy.propTypes = {}

export default React.memo(Dummy)
