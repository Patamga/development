import express from 'express'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
import sockjs from 'sockjs'
import { renderToStaticNodeStream } from 'react-dom/server'
import React from 'react'
import axios from 'axios'
import cookieParser from 'cookie-parser'
import config from './config'
import Html from '../client/html'

const Root = () => ''

try {
  // eslint-disable-next-line import/no-unresolved
  // ;(async () => {
  //   const items = await import('../dist/assets/js/root.bundle')
  //   console.log(JSON.stringify(items))

  //   Root = (props) => <items.Root {...props} />
  //   console.log(JSON.stringify(items.Root))
  // })()
  console.log(Root)
} catch (ex) {
  console.log(' run yarn build:prod to enable ssr')
}

let connections = []

const port = process.env.PORT || 8090
const server = express()

const middleware = [
  cors(),
  express.static(path.resolve(__dirname, '../dist/assets')),
  bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }),
  bodyParser.json({ limit: '50mb', extended: true }),
  cookieParser()
]

middleware.forEach((it) => server.use(it))
// Brewery component start
const BASE_URL = 'https://sandbox-api.brewerydb.com/v2'

const API_KEY = config.breweryApiKey
const API_GOOGLE_KEY = config.googleApiKey
const GOOGLE_MAP_URL = `https://maps.googleapis.com/maps/api/js?key=${API_GOOGLE_KEY}&v=3.exp&libraries=geometry,drawing,places`

const getBeerUrl = () => `${BASE_URL}/beer/random?key=${API_KEY}`
const getBreweryUrl = (id) => `${BASE_URL}/beer/${id}/breweries?key=${API_KEY}`
const getBreweryData = (id) => `${BASE_URL}/brewery/${id}/locations?key=${API_KEY}`

server.get('/api/v1/beer', (req, res) => {
  axios(getBeerUrl()).then(({ data }) => {
    res.json(data)
  })
})

server.get('/api/v1/breweries/google_map', (req, res) => {
  const url = { googlUrl: GOOGLE_MAP_URL }
  res.json(url)
})

server.get('/api/v1/breweries/:id', (req, res) => {

  axios(getBreweryUrl(req.params.id)).then(({ data }) => {
    res.json(data)
  })
})
server.get('/api/v1/breweries/locations/:id', (req, res) => {
  const url =  GOOGLE_MAP_URL
  axios(getBreweryData(req.params.id)).then(({ data }) => {
    res.json({...data, url})
  })
})

// Brewery component end

server.use('/api/', (req, res) => {
  res.status(404)
  res.end()
})

const [htmlStart, htmlEnd] = Html({
  body: 'separator',
  title: 'Skillcrucial - Become an IT HERO'
}).split('separator')

server.get('/', (req, res) => {
  const appStream = renderToStaticNodeStream(<Root location={req.url} context={{}} />)
  res.write(htmlStart)
  appStream.pipe(res, { end: false })
  appStream.on('end', () => {
    res.write(htmlEnd)
    res.end()
  })
})

server.get('/*', (req, res) => {
  const initialState = {
    location: req.url
  }

  return res.send(
    Html({
      body: '',
      initialState
    })
  )
})

const app = server.listen(port)

if (config.isSocketsEnabled) {
  const echo = sockjs.createServer()
  echo.on('connection', (conn) => {
    connections.push(conn)
    conn.on('data', async () => {})

    conn.on('close', () => {
      connections = connections.filter((c) => c.readyState !== 3)
    })
  })
  echo.installHandlers(app, { prefix: '/ws' })
}
console.log(`Serving at http://localhost:${port}`)
