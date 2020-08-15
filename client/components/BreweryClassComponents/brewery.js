import React from 'react'
import axios from 'axios'
import Pup from './pub'

const GET_URL = (id) => `/api/v1/breweries/${id}`

class Root extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      breweries: [],
      breweryesId: '',
      isLoading: false
    }
  }

  getBeer = () => {
    this.setState((s) => ({ isLoading: !s.isLoading }))
    axios(GET_URL(this.props.id)).then(({ data }) => {
      this.setState((s) => ({
        breweries: data.data,
        breweryesId: data.data.map((it) => it.id).join(', '),
        isLoading: !s.isLoading }))
    })
  }

  componentDidMount() {
    if (this.props.id !== '') {
      this.getBeer()
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.getBeer()
    }
  }

  render() {
    if (this.state.isLoading) return 'Updating...'
    if (this.props.id === '') return 'No beer - No brewery'
    return (
      <div>
        <span className="text-yellow-800 font-bold">Is this beer brewed - </span>
        {this.state.breweries.map((it) => it.name).join(', ')} <br />
        <Pup id={this.state.breweryesId} />
      </div>
    )
  }
}

export default Root
