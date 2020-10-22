import React from 'react'
import moment from 'moment'
// import spinner from '../images/spinner.svg'
const GOOGLE_API_KEY = 'AIzaSyD5l_oLzn6OM2o-HP9ABTWkCIlOOH4HA9U'
const CALENDAR_ID = 'q7gba3q71v66v7mhkbd12rgp2c@group.calendar.google.com'

class Roote extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: moment().format('dd, Do MMMM, h:mm A'),
      events: [],
      isBusy: false,
      isEmpty: false,
      isLoading: true
    }
  }

  // componentDidMount = () => {
  //   this.loadYoutubeApi()

  //   // setInterval(() => {
  //   //   this.tick();
  //   // }, 1000);
  //   //   setInterval(() => {
  //   //     this.getEvents();
  //   //   }, 60000);
  // }

  loadYoutubeApi() {
    const script = document.createElement('script')
    script.src = 'https://apis.google.com/js/client.js'
    script.getEvents = () => {
    const that = this
    function start() {
      window.gapi.client
        .init({apiKey: GOOGLE_API_KEY})
        .then(function () {
          return window.gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events`
          })
        })
        .then(
          (response) => {
            const events = response.result.items
            console.log('events', events)
            that.setState({events},
              () => {
                console.log("STATE events",that.state.events)
              }
            )
          },
          function (reason) {
            console.log(reason)
          }
        )
    }
    window.gapi.load('client', start())
  }

    document.body.appendChild(script)
  }

  componentDidMount() {
    this.loadYoutubeApi()
    console.log('gapi', window.gapi)
  }



  tick = () => {
    const time = moment().format('dddd, Do MMMM, h:mm A')
    this.setState({
      time
    })
  }

  setStatus = () => {
    const now = moment()
    const { events } = this.state.events
    console.log(events)
    for (let e = 0; e < events.length; e + 1) {
      const eventItem = events[e]
      if (moment(now).isBetween(moment(eventItem.start.dateTime), moment(eventItem.end.dateTime))) {
        this.setState({
          isBusy: true
        })

      } else {
        this.setState({
          isBusy: false
        })
      }

    }
    return this.setState()
  }

  render() {
    const { time, events } = this.state

    const eventsList = events.map(function (event) {
      return (
        <a className="list-group-item" href={event.htmlLink}  key={event.id}>
          {event.summary}{' '}
          <span className="badge">
            {moment(event.start.dateTime).format('h:mm a')},{' '}
            {moment(event.end.dateTime).diff(moment(event.start.dateTime), 'minutes')} minutes,{' '}
            {moment(event.start.dateTime).format('MMMM Do')}{' '}
          </span>
        </a>
      )
    })

    const emptyState = (
      <div className="empty">
        <h3>No meetings are scheduled for the day. Create one by clicking the button below.</h3>
      </div>
    )

    const loadingState = <div className="loading">{/* <img src={spinner} alt="Loading..." /> */}</div>

    return (
      <div className="container">
        <div className={this.state.isBusy ? 'current-status busy' : 'current-status open'}>
          <h1>{this.state.isBusy ? 'BUSY' : 'OPEN'}</h1>
        </div>
        <div className="upcoming-meetings">
          <div className="current-time">{time}, 2018</div>
          <h1>Upcoming Meetings</h1>
          <div className="list-group">
            {this.state.isLoading && loadingState}
            {events.length > 0 && eventsList}
            {this.state.isEmpty && emptyState}
          </div>
          <a
            className="primary-cta"
            href="https://calendar.google.com/calendar?cid=c3FtMnVkaTFhZGY2ZHM3Z2o5aDgxdHVldDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"

          >
            +
          </a>
        </div>
      </div>
    )
  }
}

export default Roote
