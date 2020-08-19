import React from 'react'
import axios from 'axios'
import Brewery from './brewery'

const URL = '/api/v1/beer'

class Root extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'beer',
      beerName: '',
      description: '',
      id: ''
    }
  }

  getBeer = () => {
    axios(URL).then(({ data }) => {
      this.setState({
        beerName: data.data.name,
        description: data.data.style.description,
        id: data.data.id
      })
    })
  }

  componentDidMount() {
    this.getBeer()
  }

  render() {
    return (
      <div className="m-2 bg-white p-5 border border-solid border-gray-400 ">
        <div>
          <h1>
            <span className="text-yellow-800">Random active {this.state.type} - </span>
            {this.state.beerName}
          </h1>
          <p>
            <span className="text-yellow-800 font-bold">Description - </span>
            <span className="text-sm text-gray-800">{this.state.description}</span>
          </p>

          <Brewery id={this.state.id} />
        </div>
        <button
          className=" mt-5 g-white hover:bg-gray-100 text-yellow-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          type="button"
          onClick={this.getBeer}
        >
          Refresh
        </button>
      </div>
    )
  }
}

export default Root
