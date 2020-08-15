import React from 'react'
import axios from 'axios'
import Map from './pab'

const GET_URL = (id) => `/api/v1/breweries/${id}`

class Root extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      breweries: [],
      idBrewery: [],
      isLoading: false
    }
    // this.getBeer = this.getBeer.bind(this)
  }

  getBrewery = () => {
    this.setState((s) => ({ isLoading: !s.isLoading }))
    axios(GET_URL(this.props.id)).then(({ data }) => {
      console.log(data)
      this.setState((s) => ({
        breweries: data.data,
        idBrewery: data.data.map((it) => it.id),
        isLoading: !s.isLoading }))
    })
  }

  componentDidMount() {
    if (this.props.id !== []) {
      this.getBrewery()
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.getBrewery()
    }
  }

  render() {
    if (this.state.isLoading) return 'Updating...'
    if (this.props.id === '') return 'No beer - No brewery'
    return (
      <h6>
        <span className="text-gray-600">Is this beer brewed - </span>
        {this.state.breweries.map((it) => it.name).join(', ')} <br />
        <Map id={this.state.idBrewery} />
      </h6>
    )
  }
}

export default Root
