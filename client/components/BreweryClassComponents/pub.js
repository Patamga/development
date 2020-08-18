import React from 'react'
import axios from 'axios'
import Map from './map'

const GET_URL = (id) => `/api/v1/breweries/locations/${id}`

class Root extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: [],
      isLoading: false,
    }
  }

  getMap = () => {
    this.setState((s) => ({ isLoading: !s.isLoading }))
    axios(GET_URL(this.props.id)).then(({ data }) => {
      this.setState((s) => ({ locations: data.data, isLoading: !s.isLoading }))
    })
  }

  componentDidMount() {
    if (this.props.id !== '') {
      this.getMap()
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.getMap()
    }
  }

  render() {

    if (this.state.isLoading) return 'Updating...'
    if (this.props.id === '') return 'No brewery'
    return (
      <div>
        <span className="text-yellow-800 font-bold"> Где нальют: </span>
        {this.state.locations.map((it) => {
          return (
            <div key={toString(it.id)}>
              <ul>
                <li>
                  <span className="text-yellow-800">PUB - </span>
                  {it.name}
                </li>
                <li>
                  <span className="text-yellow-800">Locality - </span>
                  {it.region}, {it.locality}
                </li>
                <li>
                  <span className="text-yellow-800">Street Address - </span>
                  {it.streetAddress}
                </li>
                {it.website && (
                  <li>
                    <span className="text-yellow-800">website - </span>
                    {it.website}
                  </li>
                )}

                <li>
                  <span className="text-yellow-800"> ~ </span>
                </li>
              </ul>
            </div>
          )
        })}
        <Map
          isMarkerShown
          averageCenter
          markers={this.state.locations}
          containerElement={<div className="mapcontainer" />}
          mapElement={<div className="mapelement" style={{ height: `100%` }} />}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div className="mapelement" />}
        />
      </div>
    )
  }
}

export default Root
