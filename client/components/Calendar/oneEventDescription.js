import React from 'react'
import { lightFormat, format } from 'date-fns'

const Dummy = (props) => {
  const eventCopyUrl = (url) => url.match(/[^=]+$/)[0]
  let parceDate
  if (props.ev.start.date) {
    parceDate = Date.parse(props.ev.start.date)
  } else if (props.ev.start.dateTime) {
    parceDate = Date.parse(props.ev.start.dateTime)
  }
  const urlCopyGoogle = `https://calendar.google.com/calendar/u/0/r/eventedit/copy/${eventCopyUrl(props.ev.htmlLink)}`
  const startDate = `${format(parceDate,'EEEEEE, do LLLL,')} ${lightFormat(parceDate, 'HH:mm')} - ${lightFormat(parceDate, 'HH:mm')}`
  return (
    <div className="popup_details">
      <span className="title">{props.ev.summary}</span>
      <div className="detail-content">
        <div className="detail-item">
          <span className="event-details-label">Date:&nbsp;</span>
          <span className="event-when">{startDate}</span>
        </div>
        <div className="detail-item">
          <span className="event-details-label">Location:&nbsp;</span>
          <span className="event-where">{props.ev.location}</span>
        </div>
        <div className="detail-item">
          <span className="event-details-label">Description:&nbsp;</span>
          <span className="event-description">{props.ev.description}</span>
        </div>
      </div>
      <div className="separator"> </div>
      <div className="links flex flex-col">
        <a href={props.ev.htmlLink}>open on google calendar»</a>
        <a href={urlCopyGoogle}>copy to my google calendar »</a>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
