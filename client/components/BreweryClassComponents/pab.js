import React from 'react'
import axios from 'axios'

const GET_URL = (id) => `/api/v1/breweries/locations/${id}`
// const api_key = 'AIzaSyA90smuqqZD25kO8CnJ2yaWSDFXISJtUu4'

class Root extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: [],
      isLoading: false
    }
    // this.getBeer = this.getBeer.bind(this)
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
    console.log(this.state)
    if (this.state.isLoading) return 'Updating...'
    if (this.props.id === '') return 'No brewery'
    return (
      <div>
        <span className="text-yellow-800 font-bold"> Где нальют: </span>
        {this.state.locations.map((it) => {
          return (
            <ul key={toString(it.id)}>
              <li>
                <span className="text-yellow-800">PAB - </span>
                {it.name}
              </li>
              <li>
                <span className="text-yellow-800">Locality - </span>
                {it.locality}
              </li>
              <li>
                <span className="text-yellow-800">Street Address - </span>
                {it.streetAddress}
              </li>
              <li>
                <span className="text-yellow-800"> ~ </span>
              </li>
            </ul>
          )
        })}

      </div>
    )
  }
}

export default Root
