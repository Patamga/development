;<div className="popupdescriotion" id={ev.id}>
  {/* popup details */}
  <div className="details">
    <span className="title">{ev.summary}</span>
    <div className="detail-content">
      <div className="detail-item">
        <span className="event-details-label">Date</span>
        <span className="event-when">
          {`${format(Date.parse(ev.start.dateTime), 'EEEEEE, do LLLL,')} ${lightFormat(
            Date.parse(ev.start.dateTime),
            'HH:mm'
          )} - ${lightFormat(Date.parse(ev.end.dateTime), 'HH:mm')}`}
        </span>
      </div>
      <div className="detail-item">
        <span className="event-details-label">Location</span>
        <span className="event-where">
          [Remind](http://bit.ly/35Vk2ly) (
          <a
            href="https://maps.google.com/maps?hl=ru&amp;q=%5BRemind%20Me%5D%28https%3A%2F%2Fbit.ly%2F350dMKn%29"
            className="menu-link"
          >
            карта
          </a>
          )
        </span>
      </div>
      <div className="detail-item">
        <span className="event-details-label">Description</span>
        <span className="event-description">{ev.description}</span>
      </div>
    </div>
    <div className="separator"> </div>
    <span className="links">
      <a href={ev.htmlLink}>open on google calendar»</a>
      &nbsp;&nbsp;
      <a
        href={`https://calendar.google.com/calendar/u/0/r/eventedit/copy/${eventCopyUrl(
          ev.htmlLink
        )}`}
      >
        copy to my google calendar »
      </a>
    </span>
  </div>
</div>
