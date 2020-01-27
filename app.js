const express = require('express')
const app = express()
const port = 8000
const routeHandler = require('./routes')
const router = routeHandler()
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const helmet = require('helmet')

app.use(bodyParser.urlencoded({ extended: false }))
  .use(logger('dev'))
  .use(helmet())
  .use(cors())
  .use(bodyParser.json())

app.use(router)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
