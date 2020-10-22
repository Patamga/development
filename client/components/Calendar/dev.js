import React from 'react'

import { formatISO } from 'date-fns'

const Dummy = () => {
  // описание переменных в ответе
  // const w = 'https://developers.google.com/calendar/v3/reference/events'
  // AMA calendar = https://calendar.google.com/calendar/u/0/embed?src=amaverify@gmail.com
  // amaverify@gmail.com 
  const y = [
  {
    kind: 'calendar#event',
    etag: '"3206111163444000"',
    id: '5lts5t650v6kudc3vst0d42662',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NWx0czV0NjUwdjZrdWRjM3ZzdDBkNDI2NjIgcTdnYmEzcTcxdjY2djdtaGtiZDEycmdwMmNAZw',
    created: '2020-10-18T21:13:01.000Z',
    updated: '2020-10-18T21:13:01.722Z',
    summary: 'test1',
    creator: {
      email: 'patamga@gmail.com'
    },
    organizer: {
      email: 'q7gba3q71v66v7mhkbd12rgp2c@group.calendar.google.com',
      displayName: 'SkillcrucialHomeWork',
      self: true
    },
    start: {
      dateTime: '2020-10-19T08:00:00+03:00'
    },
    end: {
      dateTime: '2020-10-19T10:00:00+03:00'
    },
    iCalUID: '5lts5t650v6kudc3vst0d42662@google.com',
    sequence: 0
  },
  {
    kind: 'calendar#event',
    etag: '"3206111216688000"',
    id: '4au2dl4cob0k0aa4khamko0doi',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NGF1MmRsNGNvYjBrMGFhNGtoYW1rbzBkb2kgcTdnYmEzcTcxdjY2djdtaGtiZDEycmdwMmNAZw',
    created: '2020-10-18T21:13:28.000Z',
    updated: '2020-10-18T21:13:28.344Z',
    summary: 'test2',
    creator: {
      email: 'patamga@gmail.com'
    },
    organizer: {
      email: 'q7gba3q71v66v7mhkbd12rgp2c@group.calendar.google.com',
      displayName: 'SkillcrucialHomeWork',
      self: true
    },
    start: {
      dateTime: '2020-10-23T05:30:00+03:00'
    },
    end: {
      dateTime: '2020-10-23T06:30:00+03:00'
    },
    iCalUID: '4au2dl4cob0k0aa4khamko0doi@google.com',
    sequence: 0
  },
  {
    kind: 'calendar#event',
    etag: '"3206111398800000"',
    id: '6gqsc93uuckjqu2i173qfj3hif_20201209',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=Nmdxc2M5M3V1Y2tqcXUyaTE3M3FmajNoaWZfMjAyMDEyMDkgcTdnYmEzcTcxdjY2djdtaGtiZDEycmdwMmNAZw',
    created: '2020-10-18T21:14:59.000Z',
    updated: '2020-10-18T21:14:59.400Z',
    summary: 'test3',
    creator: {
      email: 'patamga@gmail.com'
    },
    organizer: {
      email: 'q7gba3q71v66v7mhkbd12rgp2c@group.calendar.google.com',
      displayName: 'SkillcrucialHomeWork',
      self: true
    },
    start: {
      date: '2020-12-09'
    },
    end: {
      date: '2020-12-10'
    },
    recurringEventId: '6gqsc93uuckjqu2i173qfj3hif',
    originalStartTime: {
      date: '2020-12-09'
    },
    transparency: 'transparent',
    iCalUID: '6gqsc93uuckjqu2i173qfj3hif@google.com',
    sequence: 0
  },
  {
    kind: 'calendar#event',
    etag: '"3206111398800000"',
    id: '6gqsc93uuckjqu2i173qfj3hif_20201216',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=Nmdxc2M5M3V1Y2tqcXUyaTE3M3FmajNoaWZfMjAyMDEyMTYgcTdnYmEzcTcxdjY2djdtaGtiZDEycmdwMmNAZw',
    created: '2020-10-18T21:14:59.000Z',
    updated: '2020-10-18T21:14:59.400Z',
    summary: 'test3',
    creator: {
      email: 'patamga@gmail.com'
    },
    organizer: {
      email: 'q7gba3q71v66v7mhkbd12rgp2c@group.calendar.google.com',
      displayName: 'SkillcrucialHomeWork',
      self: true
    },
    start: {
      date: '2020-12-16'
    },
    end: {
      date: '2020-12-17'
    },
    recurringEventId: '6gqsc93uuckjqu2i173qfj3hif',
    originalStartTime: {
      date: '2020-12-16'
    },
    transparency: 'transparent',
    iCalUID: '6gqsc93uuckjqu2i173qfj3hif@google.com',
    sequence: 0
  },
  {
    kind: 'calendar#event',
    etag: '"3206111398800000"',
    id: '6gqsc93uuckjqu2i173qfj3hif_20201223',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=Nmdxc2M5M3V1Y2tqcXUyaTE3M3FmajNoaWZfMjAyMDEyMjMgcTdnYmEzcTcxdjY2djdtaGtiZDEycmdwMmNAZw',
    created: '2020-10-18T21:14:59.000Z',
    updated: '2020-10-18T21:14:59.400Z',
    summary: 'test3',
    creator: {
      email: 'patamga@gmail.com'
    },
    organizer: {
      email: 'q7gba3q71v66v7mhkbd12rgp2c@group.calendar.google.com',
      displayName: 'SkillcrucialHomeWork',
      self: true
    },
    start: {
      date: '2020-12-23'
    },
    end: {
      date: '2020-12-24'
    },
    recurringEventId: '6gqsc93uuckjqu2i173qfj3hif',
    originalStartTime: {
      date: '2020-12-23'
    },
    transparency: 'transparent',
    iCalUID: '6gqsc93uuckjqu2i173qfj3hif@google.com',
    sequence: 0
  },
  {
    kind: 'calendar#event',
    etag: '"3206260496620000"',
    id: '22qn9cbtafish4g3eabnobl6sc',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=MjJxbjljYnRhZmlzaDRnM2VhYm5vYmw2c2MgcTdnYmEzcTcxdjY2djdtaGtiZDEycmdwMmNAZw',
    created: '2020-10-19T17:57:28.000Z',
    updated: '2020-10-19T17:57:28.310Z',
    summary: 'Митинг по поводу что говоить если нечего говорить',
    description: 'быть всем',
    location: 'улица Ивана Выговского, вулиця Івана Виговського, Київ, Украина, 02000',
    creator: {
      email: 'patamga@gmail.com'
    },
    organizer: {
      email: 'q7gba3q71v66v7mhkbd12rgp2c@group.calendar.google.com',
      displayName: 'SkillcrucialHomeWork',
      self: true
    },
    start: {
      dateTime: '2020-10-21T18:45:00+03:00'
    },
    end: {
      dateTime: '2020-10-21T20:15:00+03:00'
    },
    iCalUID: '22qn9cbtafish4g3eabnobl6sc@google.com',
    sequence: 0
  },
  {
    kind: 'calendar#event',
    etag: '"3206260890338000"',
    id: '0vatprnp5c0ca7atheb4e50hjr',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=MHZhdHBybnA1YzBjYTdhdGhlYjRlNTBoanIgcTdnYmEzcTcxdjY2djdtaGtiZDEycmdwMmNAZw',
    created: '2020-10-19T18:00:44.000Z',
    updated: '2020-10-19T18:00:45.169Z',
    summary: 'день рождения !!!',
    description: 'Мероприятие для своих',
    location: 'Москва, Россия',
    creator: {
      email: 'patamga@gmail.com'
    },
    organizer: {
      email: 'q7gba3q71v66v7mhkbd12rgp2c@group.calendar.google.com',
      displayName: 'SkillcrucialHomeWork',
      self: true
    },
    start: {
      date: '2020-10-21'
    },
    end: {
      date: '2020-10-22'
    },
    visibility: 'public',
    iCalUID: '0vatprnp5c0ca7atheb4e50hjr@google.com',
    sequence: 0
  },
  {
    kind: 'calendar#event',
    etag: '"3206261398308000"',
    id: '1ev4g9to8roga6er3fflokjp8f',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=MWV2NGc5dG84cm9nYTZlcjNmZmxva2pwOGYgcTdnYmEzcTcxdjY2djdtaGtiZDEycmdwMmNAZw',
    created: '2020-10-19T18:04:58.000Z',
    updated: '2020-10-19T18:04:59.154Z',
    summary: 'Grit sabmit kuraga',
    description: 'lolem ipsum',
    creator: {
      email: 'patamga@gmail.com'
    },
    organizer: {
      email: 'q7gba3q71v66v7mhkbd12rgp2c@group.calendar.google.com',
      displayName: 'SkillcrucialHomeWork',
      self: true
    },
    start: {
      date: '2020-11-11'
    },
    end: {
      date: '2020-11-12'
    },
    transparency: 'transparent',
    visibility: 'public',
    iCalUID: '1ev4g9to8roga6er3fflokjp8f@google.com',
    sequence: 0
  }]
  const r = [
        {
            "kind": "calendar#event",
            "etag": "\"2340970771580000\"",
            "id": "ijmstd91n57ppbb9868s01vh7g",
            "status": "confirmed",
            "htmlLink": "https://www.google.com/calendar/event?eid=aWptc3RkOTFuNTdwcGJiOTg2OHMwMXZoN2cgcGZ1dGRibGYxZ2k4am1mc3Zyb2g3NmY2amdAZw",
            "created": "2007-02-03T06:49:45.000Z",
            "updated": "2007-02-03T06:49:45.790Z",
            "summary": "Wild Hogs",
            "description": "A group of suburban biker wannabes look for adventure hit the open road in search of adventure, but get more than they bargained for when they encounter a New Mexico gang called the Del Fuegos.\n\nhttp://www.imdb.com/title/tt0486946/",
            "location": "Theaters Nationwide",
            "creator": {
                "email": "da.buddha@gmail.com",
                "displayName": "Alex Billington"
            },
            "organizer": {
                "email": "pfutdblf1gi8jmfsvroh76f6jg@group.calendar.google.com",
                "displayName": "FS.net Release Schedule",
                "self": true
            },
            "start": {
                "date": "2007-03-02"
            },
            "end": {
                "date": "2007-03-03"
            },
            "transparency": "transparent",
            "visibility": "public",
            "iCalUID": "ijmstd91n57ppbb9868s01vh7g@google.com",
            "sequence": 0,
            "guestsCanInviteOthers": false,
            "guestsCanSeeOtherGuests": false
        },
        {
            "kind": "calendar#event",
            "etag": "\"2340970901532000\"",
            "id": "2sb4cgchdrafrp1tbt9njd06gs",
            "status": "confirmed",
            "htmlLink": "https://www.google.com/calendar/event?eid=MnNiNGNnY2hkcmFmcnAxdGJ0OW5qZDA2Z3MgcGZ1dGRibGYxZ2k4am1mc3Zyb2g3NmY2amdAZw",
            "created": "2007-02-03T06:49:18.000Z",
            "updated": "2007-02-03T06:50:50.766Z",
            "summary": "Full of It",
            "description": "A young kid (Pinkston) is forced to live out the lies he told to become popular.\n\nhttp://www.imdb.com/title/tt0446752/",
            "location": "Theaters Nationwide",
            "creator": {
                "email": "da.buddha@gmail.com",
                "displayName": "Alex Billington"
            },
            "organizer": {
                "email": "pfutdblf1gi8jmfsvroh76f6jg@group.calendar.google.com",
                "displayName": "FS.net Release Schedule",
                "self": true
            },
            "start": {
                "date": "2007-03-02"
            },
            "end": {
                "date": "2007-03-03"
            },
            "transparency": "transparent",
            "visibility": "public",
            "iCalUID": "2sb4cgchdrafrp1tbt9njd06gs@google.com",
            "sequence": 0,
            "guestsCanInviteOthers": false
        },
        {
            "kind": "calendar#event",
            "etag": "\"2340970971658000\"",
            "id": "4saq6ier56iqfpfh4o013l71oo",
            "status": "confirmed",
            "htmlLink": "https://www.google.com/calendar/event?eid=NHNhcTZpZXI1NmlxZnBmaDRvMDEzbDcxb28gcGZ1dGRibGYxZ2k4am1mc3Zyb2g3NmY2amdAZw",
            "created": "2007-02-03T06:51:25.000Z",
            "updated": "2007-02-03T06:51:25.829Z",
            "summary": "Zodiac",
            "description": "Based on the Robert Graysmith books about the real life notorious Zodiac, a serial killer who terrorized San Francisco with a string of seemingly random murders during the 1960s and 1970s.\n\nhttp://www.imdb.com/title/tt0443706/",
            "location": "Theaters Nationwide",
            "creator": {
                "email": "da.buddha@gmail.com",
                "displayName": "Alex Billington"
            },
            "organizer": {
                "email": "pfutdblf1gi8jmfsvroh76f6jg@group.calendar.google.com",
                "displayName": "FS.net Release Schedule",
                "self": true
            },
            "start": {
                "date": "2007-03-02"
            },
            "end": {
                "date": "2007-03-03"
            },
            "transparency": "transparent",
            "visibility": "public",
            "iCalUID": "4saq6ier56iqfpfh4o013l71oo@google.com",
            "sequence": 0,
            "guestsCanInviteOthers": false,
            "guestsCanSeeOtherGuests": false
        },
        {
            "kind": "calendar#event",
            "etag": "\"2340971010346000\"",
            "id": "43n0gvhriuoiopbfp7a4g63hpk",
            "status": "confirmed",
            "htmlLink": "https://www.google.com/calendar/event?eid=NDNuMGd2aHJpdW9pb3BiZnA3YTRnNjNocGsgcGZ1dGRibGYxZ2k4am1mc3Zyb2g3NmY2amdAZw",
            "created": "2007-02-03T06:46:19.000Z",
            "updated": "2007-02-03T06:51:45.173Z",
            "summary": "The Number 23",
            "description": "A man (Carrey) becomes obsessed with a book that appears to be based on his life but ends with a murder that has yet to happen in real life.\n\nhttp://www.imdb.com/title/tt0481369/",
            "location": "Theaters Nationwide",
            "creator": {
                "email": "da.buddha@gmail.com",
                "displayName": "Alex Billington"
            },
            "organizer": {
                "email": "pfutdblf1gi8jmfsvroh76f6jg@group.calendar.google.com",
                "displayName": "FS.net Release Schedule",
                "self": true
            },
            "start": {
                "date": "2007-02-23"
            },
            "end": {
                "date": "2007-02-24"
            },
            "transparency": "transparent",
            "visibility": "public",
            "iCalUID": "43n0gvhriuoiopbfp7a4g63hpk@google.com",
            "sequence": 0,
            "guestsCanInviteOthers": false,
            "guestsCanSeeOtherGuests": false
        }]
// const g = y.map((o) => Date.parse(o.created))
console.log(r)
const p = y.reduce((acc, rec) => {
  console.log('gg', rec.start.date, 'gt', rec.start.dateTime)
  if (typeof rec.start.date !== 'undefined') {
    return [...acc, { date: rec.start.date, id: rec.id }]
  }
  if (typeof rec.start.dateTime !== 'undefined') {
    const format = formatISO(Date.parse(rec.start.dateTime), { representation: 'date' })
    return [...acc, { date: format, id: rec.id }]
  }
  return acc
}, [])
console.log("_________",p)
  return <div> </div>

}

Dummy.propTypes = {}

export default React.memo(Dummy)
